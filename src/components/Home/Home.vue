<template>
    <div class="home">
        <div class="order-validate clearfix section_01">
            <h3 class="order-validate-title">订单验证</h3>
            <div class="order-validate-wraper">
                <z-button :className="'order-validate-button'" :text="'确定'" @z-button-event="submitOrderInfo">确定</z-button>
                <input class="order-num" type="text" placeholder="请输入订单号" v-model="orderInfo.orderNum" />
                <input class="order-code" type="text" placeholder="请输入验证码"  v-model="orderInfo.orderCode" />
            </div>
        </div>
        <div class="section_02 clearfix">
            <div class="left">
                <div class="notice">
                    <h3>更美公告<router-link class="more" to="/">查看全部 ></router-link></h3>
                    <ul class="notice-list">
                        <li class="notice-item" v-for="item in noticeList.slice(0, 3)" :key="item.id">
                            <router-link to="/">
                                <h4 class="title">【公告】{{item.title}}<span class="date">{{item.date}}</span></h4>
                                <p class="content ellipsis">{{item.content}}</p>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="right">
                <div class="bridge">
                    <h3>更美商桥<router-link class="more" to="/">查看全部 ></router-link></h3>
                    <div class="bridge-list">
                        <div class="bridge-item">
                            <span class="number">
                                &yen;<z-countup :start="0" :end="Number(1000)" :duration="2" :decimal="'.'" :decimalNum="2"></z-countup>
                            </span>
                            <span class="name">
                                账户余额
                            </span>
                        </div>
                        <div class="bridge-item">
                            <span class="number">
                                &yen;<z-countup :start="0" :end="Number(1000)" :duration="2" :decimal="'.'" :decimalNum="2"></z-countup>
                            </span>
                            <span class="name">
                                累计消费
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section_03">
            <div class="data-board">
                <h3>更美公告<router-link class="more" to="/">查看全部 ></router-link></h3>
                {{state}}
                <demo></demo>
            </div>
        </div>
        <div>
            <h3>递归组件实现树结构</h3>
            <ul class="test1">
                <z-multilevelmenu v-for="(item, index) in tree" :idx="index" :item="item" :customClass="'test1-item'"></z-multilevelmenu>
            </ul>
        </div>
        <z-toast :show.sync="showZToast" :text="'提示信息'"></z-toast>
        <!-- <swiper></swiper> -->
        <div>
            <input type="text" :value="checkedEmoji">
            <button @click="getEmoji">显示emoji</button>
        </div>
        <div v-if="showEmoji">
            <span v-for="e in emoji" @click="checkedEmojiFun">{{e}}</span>
        </div>
    </div>
</template>
<script>
import ZButton from '@/UIComponents/ZButton'
import ZToast from '@/UIComponents/ZToast'
import ZCountup from '@/UIComponents/ZCountup'
import ZMultilevelmenu from '@/UIComponents/ZMultilevelmenu'
import Demo from '@/components/Home/Demo'
import Swiper from '@/components/Home/Swiper'
var emoji = require('node-emoji');
var json = require('./emoji.json');

export default {
    name: 'home',
    components: {
        ZButton,
        ZToast,
        ZCountup,
        Demo,
        ZMultilevelmenu,
        Swiper
    },
    data () {
        return {
            orderInfo: {
                orderNum: '',
                orderCode: ''
            },
            showZToast: false,
            noticeList: [],
            state: this.$store.state,
            tree: [{
                label: "一级菜单",
                test:1,
                children: [{
                    label: "二级菜单",
                    test:2,
                    children: [{
                        label: "三级菜单",
                        test:3,
                        },{
                        label: "三级菜单",
                        test:3
                        },{
                        label: "三级菜单",
                        test:3
                    }]
                }]
            },{
                label: "一级菜单",
                test:1,
                children: [{
                    label: "二级菜单",
                    test:2,
                    children: [{
                        label: "三级菜单",
                        test:3
                        },{
                        label: "三级菜单",
                        test:3
                        },{
                        label: "三级菜单",
                        test:3
                    }]
                }]
            }],
            emoji: [],
            showEmoji: false,
            checkedEmoji: ''
        }
    },
    created () {
        this.$http.get('/goods/list').then(res => {
            let {data} = res;
        });
        this.$http.get('/notice/list').then(res => {
            let {data} = res;
            this.noticeList = data;
        });
    },
    methods: {
        getEmoji () {
            for (var i in json) {
                this.emoji.push(emoji.get(i));
            }
            this.showEmoji = !this.showEmoji;
        },
        checkedEmojiFun (e) {
            this.checkedEmoji = e.target.innerText;
        },
        submitOrderInfo () {
            let validate = this.validateOrderInfo();
            if (validate.error) {
                this.showZToast = true;
            }

        },
        validateOrderInfo () {
            if (this.orderInfo.orderNum === '') {
                return {
                    error: '请输入订单号'
                };
            }
            if (this.orderInfo.orderNum === '') {
                return {
                    error: '请输入验证码'
                };
            }
            return {
                error: null
            }
        }
    }
}
</script>
<style lang="less" scoped>
.home {
    position: relative;
    width: 100%;
    padding: 40px;
    min-width: 960px;
    min-width: 600px;
}
.order-validate {
    margin-bottom: 30px;
    padding: 30px;
    background-color: #fff;
    box-shadow: 0 2px 6px rgba(14, 37, 49, 0.2);
    h3 {
        float: left;
        font-size: 20px;
        line-height: 40px;
    }
    .order-validate-title {
        float: left;
    }
    .order-validate-wraper {
        float: right;
        width: 90%;
    }
    .order-validate-button, .order-num, .order-code {
        float: right;
    }
    .order-num, .order-code {
        font-size: 14px;
        width: 23.65%;
        max-width: 333px;
        height: 42px;
        padding: 0 22px;
        margin: 0 15px;
        border: 1px solid #30D5D7;
        border-radius: 0;
    }
}
.section_02 {
    position: relative;
    margin-bottom: 30px;
    padding-right: 464px;
    .left, .right {
        min-height: 299px;
        padding: 16px 30px 30px;
        border-top: 4px solid transparent;
        background: #fff;
    }
    .left {
        border-color: #A6E1E7;
    }
    .right {
        position: absolute;
        width: 434px;
        top: 0;
        right: 0;
        border-color: #4CA6D9;
    }
    h3 {
        line-height: 24px;
        font-size: 20px;
        font-weight: normal;
    }
    .more {
        float: right;
        font-size: 16px;
        color: #2A80B0;
    }
    .notice-item {
        display: block;
        padding: 12px 0;
        border-bottom: 1px solid #f0f2f3;
        .title {
            position: relative;
            margin-left: -8px;
            font-size: 16px;
            color: #333;
            line-height: 24px;
            padding-right: 145px;
            .date {
                position: absolute;
                right: 0;
                font-size: 14px;
                color: #c3c3c3;
            }
        }
        .content {
            font-size: 14px;
            line-height: 22px;
            color: #676767;
        }
    }
    .bridge-item {
        padding-top: 32px;
        .number, .name {
            display: block;
        }
        .number {
            font-size: 36px;
            line-height: 44px;
            color: #2a80b0;
        }
        .name {
            font-size: 14px;
            line-height: 22px;
            color: #676767;
        }
    }
}
.section_03 {
    .data-board {
        padding: 16px 30px 30px;
        margin-bottom: 3px;
        border-top: 4px solid #a5b1c1;
        background: #fff;
        h3 {
            line-height: 24px;
            font-size: 20px;
            font-weight: normal;
        }
        .more {
            float: right;
            font-size: 16px;
            color: #2A80B0;
        }
    }
}
</style>


