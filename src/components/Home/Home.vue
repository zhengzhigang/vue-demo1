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
                <div class="notice"></div>
            </div>
            <div class="righ">
                <div class="bridge"></div>
            </div>
        </div>
        <z-toast :show.sync="showZToast" :text="'提示信息'"></z-toast>
    </div>
</template>
<script>
import ZButton from '@/UIComponents/ZButton'
import ZToast from '@/UIComponents/ZToast'
export default {
    name: 'home',
    components: {
        ZButton,
        ZToast
    },
    data () {
        return {
            orderInfo: {
                orderNum: '',
                orderCode: ''
            },
            showZToast: false
        }
    },
    created () {
        this.$http.get('/goods/list').then(res => {
            let {data} = res;
        });
    },
    methods: {
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
    .left, .right {
        min-height: 299px;
        padding: 16px 30px 30px;
        border-top: 4px solid transparent;
    }
    .left {
        padding-right: 464px;
        border-color: #A6E1E7;
    }
    .right {
        position: absolute;
        width: 434px;
        top: 0;
        right: 0;
        border-color: #4CA6D9;
    }
}
</style>


