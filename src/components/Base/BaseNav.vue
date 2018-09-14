<template>
    <div class="base-nav">
        <div class="base-nav-wrapper">
            <div class="base-nav-item" v-for="(item, idx) in basenav" @click="sideBarAction(idx)" :class="{cur: currentNav === idx}">
                <SlideBarItem :nav="item" :key="idx" />
            </div>
        </div>
    </div>
</template>
<script>
import SlideBarItem from './SlideBarItem'
let navs = [{
                showChild: false,
                title: '我的首页',
                link: 'home',
                paths: 'home',
                icon: 'icon-side-home'
            }, {
                showChild: false,
                title: '运营数据',
                icon: 'icon-side-data',
                paths: 'conversion,sales,dashboard',
                subItem: [{
                    title: '转换率分析',
                    link: 'conversion'
                }, {
                    title: '销量',
                    link: 'sales'
                },{
                    title: '经营分析',
                    link: 'dashboard'
                }]
            }, {
                showChild: false,
                title: '私信管理',
                icon: 'icon-side-message',
                paths: 'pm,quick_reply',
                subItem: [{
                    title: '用户私信',
                    link: 'pm',
                    label: 'privateWidget'
                }, {
                    title: '消息设置',
                    link: 'quick_reply'
                }]
            }, {
                render: 'isMerchant',
                showChild: false,
                title: '案例管理',
                link: 'diary',
                paths: 'diary',
                icon: 'icon-side-diary'
            },
            {
                showChild: false,
                title: '更美商桥',
                icon: 'icon-side-business',
                text: '1',
                paths: 'ad_account,ad_resources,ad_order,ad_purchase,ad_recharge,ad_guide,ad_browsed,ad_pm,ad_cpc,ad_cpc_info,cpc_edit_promotion,cpc_promotion_record,cpc_history_data',
                subItem: [{
                    title: '我的账户',
                    link: 'ad_account'
                }, {
                    title: '服务资源',
                    link: 'ad_resources'
                }, {
                    title: '我的服务订单',
                    link: 'ad_order'
                },{
                    title: '点点通',
                    link: 'ad_cpc_info'
                }
                ]
            },
            {
                showChild: false,
                title: '订单管理',
                icon: 'icon-side-order',
                paths: 'order,refund,supplement,statement,pay_order,pay_account,bill_apply,bill_record,bill',
                subItem: [{
                    title: '美购订单列表',
                    link: 'order',
                    label: 'orderWidget'
                }, {
                    title: '美购退款单列表',
                    link: 'refund',
                    label: 'refundWidget'
                }, {
                    title: '补单管理',
                    link: 'supplement'
                }, {
                    render: 'isMerchant',
                    title: '总对账单',
                    link: 'statement_v2'
                }, {
                    title: '美购对账单',
                    link: 'statement'
                }, {
                    title: '买单订单列表',
                    link: 'pay_order'
                }, {
                    title: '买单对账单',
                    link: 'pay_account'
                }, {
                    title: '买单设置',
                    link: 'pay_setting'
                },{
                    render: 'isMerchant',
                    title: '发票申请',
                    link: 'bill_apply'
                }]
            }, {
                showChild: false,
                title: '美购管理',
                icon: 'icon-side-special',
                paths: 'service_my,service',
                subItem: [{
                    title: '发布美购',
                    click: 'on-show-service'
                }, {
                    title: '发布分销美购',
                    click: 'on-show-sale-service'
                }, {
                    title: '我的美购',
                    link: 'service_my'
                }]
            }, {
                showChild: false,
                title: '活动相关',
                icon: 'icon-side-activity',
                paths: 'coupon_my,activity,activity/entrance,new_coupon',
                label: 'hadActivity',
                subItem: [{
                    title: '我的美券',
                    link: 'coupon_my'
                }, {
                    title: '活动报名',
                    link: 'activity'
                }, {
                    title: '专场入口',
                    link: 'activity/entrance',
                    text: 'activityWidget'
                }]
            }, {
                showChild: false,
                title: '用户管理',
                icon: 'icon-side-user',
                paths: 'reserve,reserve_schedule,reply,topic',
                subItem: [{
                    title: '预约列表',
                    link: 'reserve',
                    label: 'reserveWidget'
                }, {
                    title: '预约设置',
                    link: 'reserve_schedule'
                }, {
                    title: '话题回复',
                    link: 'reply'
                }, {
                    title: '用户咨询',
                    link: 'topic'
                }]
            }, {
                showChild: false,
                title: '公告协议',
                icon: 'icon-side-agree',
                paths: 'bulletin,agreement',
                subItem: [{
                    title: '医生公告',
                    link: 'bulletin'
                }, {
                    title: '医生协议',
                    link: 'agreement'
                }]
            }, {
                render: false,
                showChild: false,
                title: '医院信息',
                link: 'edit_hospital',
                icon: 'icon-side-hospital',
                paths: 'edit_hospital'
            }, {
                showChild: false,
                title: '金融服务',
                icon: 'icon-side-finance',
                paths: 'staging',
                subItem: [{
                    title: '线下分期',
                    link: 'staging'
                }]
            }]
export default {
    name: 'BaseNav',
    components: {
        SlideBarItem
    },
    data () {
        return {
            basenav: navs,
            currentNav: 0
        }
    },
    methods: {
        sideBarAction (idx) {
            this.currentNav = idx;
        }
    }
}
</script>
<style lang="less" scoped>
.base-nav {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    padding-top: 50px;
    width: 236px;
    background: #2B3B52;
    overflow-y: scroll;
    overflow-x: hidden;
    &::-webkit-scrollbar {
        display: none;
    }
    .base-nav-wrapper {
        .base-nav-item {
            border-left: 5px solid transparent;
            &.cur {
                border-left-color: rgba(76, 166, 217, 0.9);
                background: #222e3e;
            }
        }
        a {
            display: block;
            padding: 16px 20px;
            font-size: 16px;
            color: #A5B1C1;
            text-align: left;
            span {
                padding-left: 40px;
            }
            &:hover {
                background-color: #222e3e;
            }
        }
        li {
            a {
                font-size: 14px;
                &:hover {
                    color: #fff;
                }
            }
        }
    }
}
</style>


