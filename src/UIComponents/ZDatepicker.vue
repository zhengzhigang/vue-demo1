<template>
    <div class="date-picker" @click.stop="showDatePicker">
        <input type="text" readonly="true" :style="{width: width + 'px'}" placeholder="选择时间" :value="getDate ? getDate : null">
        <div v-if="visible" class="date-picker-box">
            <div class="date-picker-head">
                <div class="prev">
                    <span @click="changeYear(-1, true)">&lt;&lt;</span>
                    <span @click="changeMonth(-1)">&lt;</span>
                </div>
                <div class="value">{{nowYear}}年{{nowMonth + 1}}月</div>
                <div class="next">
                    <span @click="changeMonth(1)">&gt;</span>
                    <span @click="changeYear(1, true)">&gt;&gt;</span>
                </div>
            </div>
            <div class="date-picker-content">
                <table>
                    <thead>
                        <tr>
                            <th v-for="day in days">
                                <span>{{day}}</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="i in 6">
                            <td v-for="j in 7" @click.stop="pickDate(getIdx(i, j))">
                                <span :class="date[getIdx(i, j)].status">{{date[getIdx(i, j)].text}}</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ZDatepicker',
    data () {
        return {
            width: 234,
            visible: false,
            now: new Date(),
            days: ['日', '一', '二', '三', '四', '五', '六'],
            date: [],
            getDate: null
        }
    },
    computed: {
        nowYear () {
            return this.now.getFullYear();
        },
        nowMonth () {
            return this.now.getMonth();
        },
        nowDate () {
            return this.now.getDate();
        }
    },
    methods: {
        changeMonth (flag) {
            this.now.setMonth(this.nowMonth + flag);
            this.now = new Date(this.now);
            this.updateDate();
        },
        changeYear (flag, update) {
            this.now.setFullYear(this.nowYear + flag)
            this.now = new Date(this.now)
            if (update) {
                this.updateDate()
            }
        },
        pickDate (idx) {
            let date = this.date[idx];
            if (date.disabled) {
                return;
            }
            this.hideDatePicker();
            this.now = date.time;
            this.getDate = this.nowYear + '-' + this.nowMonth + '-' + this.nowDate;
        },
        getIdx (i, j) {
            return (i - 1) * 7 + j - 1;
        },
        updateDate () {
            let arr = [];
            let time = new Date(this.now);
            // 第一天
            time.setMonth(time.getMonth(), 1);
            let curFirstDay = time.getDay()
            if (curFirstDay === 0) {
                curFirstDay = 7
            }

            // 最后一天
            time.setDate(0);

            let lastDayCount = time.getDate();
            for (let i = curFirstDay; i > 0; i--) {
                let t = new Date(time.getFullYear(), time.getMonth(), lastDayCount - i + 1);
                arr.push({
                    text: lastDayCount - i + 1,
                    time: t,
                    status: 'date-pass',
                    disabled: true
                });
            }
            // 获取本月的最后一天
            time.setMonth(time.getMonth() + 2, 0);
            let curDayCount = time.getDate()
            
            time.setDate(1);
            for (var i = 0; i < curDayCount; i++) {
                let t = new Date(time.getFullYear(), time.getMonth(), i + 1);
                arr.push({
                    text: i + 1,
                    time: t,
                    status: 'active',
                    disabled: false
                });
            }

            let j = 1;
            while (arr.length < 42) {
                let t = new Date(time.getFullYear(), time.getMonth() + 1, j);
                arr.push({
                    text: j,
                    time: t,
                    status: 'date-future',
                    disabled: true
                });
                j++;
            }
            this.date = arr;
        },
        setMonth (month) {
            this.month = month;
        },
        hideDatePicker () {
            document.removeEventListener('click', this.hideDatePicker, false);
            this.visible = false;
        },
        showDatePicker () {
            this.updateDate();
            this.visible = true;
            document.addEventListener('click', this.hideDatePicker, false)
        }
    }
}
</script>
<style lang="less" scoped>
.date-picker {
    position: relative;
    input {
        height: 38px;
        line-height: 38px;
        padding: 0 36px 0 12px;
        border: 1px solid #E5E5E5;
        font-size: 14px;
        color: #333;
        border-radius: 4px;
    }
}
.date-picker-box {
    position: absolute;
    width: 304px;
    left: 0;
    top: 100%;
    margin-top: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    background: #fff;
}
.date-picker-head {
    position: relative;
    height: 42px;
    line-height: 42px;
    text-align: center;
    color: #fff;
    background: #5CAEDC;
    .prev, .next {
        position: absolute;
        top: 0;
        span {
            padding: 0 8px;
            cursor: pointer;
        }
    }
    .prev {
        left: 30px;
    }
    .next {
        right: 30px;
    }
    .value {
        width: 100%;
    }
}
.date-picker-content {
    padding: 5px 6px 20px;
    table {
        width: 100%;
    }
    th {
        padding: 3px 0;
        font-weight: normal;
    }
    td {
        text-align: center;
        span.active:hover {
            background: #5CAEDC;
            color: #fff;
            cursor: pointer;
        }
    }
    span {
        display: inline-block;
        padding: 6px;
        width: 30px;
        height: 30px;
        font-size: 12px;
        border-radius: 2px;
        &.date-pass, &.date-future {
            cursor: not-allowed;
            color: rgba(0, 0, 0, 0.25);
        }
    }
}
</style>


