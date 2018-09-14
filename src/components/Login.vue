<template>
    <div class="login" :class="method">
        <h1>更美医生后台</h1>
        <form>
            <template v-if="method == 'password'">
                <div class="field name">
                    <input type="text" v-model="name" placeholder="请输入姓名">
                </div>
                <div class="field password">
                    <input type="text" v-model="password" placeholder="请输入密码">
                </div>
            </template>
            <template v-if="method == 'authcode'">
                <div class="field phone">
                    <span class="phone-prefix" @click.stop="toggleDrop">{{phonePrefix}}</span>
                    <input type="text" v-model="phone" placeholder="请输入手机号">
                    <div class="drop-phones" v-if="isDropShow">  
                        <span class="triangle"></span>
                        <ul>
                            <li class="clearfix" v-for="item in dropPhones" @click="selectPhonePrefix(item)">
                                <span class="name">{{item.name}}</span>
                                <span class="number">{{item.number}}</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="field imgcode">
                    <input type="text" v-model="imgcode" placeholder="请输入图形验证码">
                </div>
                <div class="field code">
                    <input type="text" v-model="code" placeholder="请输入验证码">
                </div>
            </template>
            <button>确定</button>
            <div>
                <span class="switch" @click="switchLoginMethod">{{method == password ? '切换到手机验证码登录' : '切换到密码登录'}}</span>
            </div>
        </form>
    </div>
</template>
<script>
import globalClick from '../util/globalClick'
export default {
    name: 'Login',
    data () {
        return {
            method: 'password',
            name: '',
            password: '',
            phone: '',
            imgcode: '',
            code: '',
            phonePrefix: '+86',
            isDropShow: false,
            dropPhones: [
                {name: '中国大陆', number: '+86'},
                {name: '香港', number: '+852'},
                {name: '台湾', number: '+886'},
                {name: '韩国', number: '+82'},
                {name: '日本', number: '+81'},
                {name: '泰国', number: '+66'},
                {name: '新加坡', number: '+65'}
            ]
        }
    },
    mounted () {
        this.otherClickEvent = function (e) {
            if (this.isDropShow) {
                this.isDropShow = false
            }
        }.bind(this)
        globalClick.add(this.otherClickEvent)
    },
    beforeDestroy () {
        globalClick.remove(this.otherClickEvent)
    },
    methods: {
        switchLoginMethod () {
            this.method = this.method == 'authcode' ? 'password' : 'authcode';
        },
        toggleDrop () {
            this.isDropShow = !this.isDropShow;
        },
        selectPhonePrefix (item) {
            this.phonePrefix = item.number;
            this.isDropShow = false;
        }
    }
}
</script>
<style lang="less" scoped>
    .login {
        width: 400px;
        padding: 40px 0;
        margin: auto;
        h1 {
            margin-bottom: 20px;
            font-size: 24px;
            color: #555;
            text-align: center;
        }
        .field {
            position: relative;
        }
        .field input {
            display: block;
            width: 100%;
            height: 48px;
            padding: 0 10px;
            border: 1px solid transparent;
            border-radius: 4px;
            &:focus {
                border-color: #61ABDA;
            }
        }
        .phone-prefix {
            position: absolute;
            display: block;
            width: 55px;
            top: 9px;
            left: 0;
            font-size: 16px;
            line-height: 30px;
            text-align: center;
            border-right: 1px solid #ddd;
        }
        .phone input {
            padding-left: 65px;
        }
        .name, .phone, .imgcode {
            margin-bottom: 20px;
        }
        .password, .code {
            margin-bottom: 10px;
        }
        button {
            display: block;
            width: 100%;
            height: 48px;
            margin: 50px 0 20px;
            border-radius: 4px;
            background: #61ABDA;
            color: #fff;
            &:hover {
                background: #75C3F4;
            }
        }
        .switch {
            display: block;
            color: #61ABDA;
            cursor: pointer;
        }
        .drop-phones {
            position: absolute;
            left: 0;
            right: 0;
            top: 64px;
            background: #fff;
            z-index: 1;
            cursor: pointer;
            .triangle {
                position: absolute;
                display: block;
                top: -20px;
                left: 17px;
                width: 0;
                height: 0;
                border-top: 10px solid transparent;
                border-left: 10px solid transparent;
                border-right: 10px solid transparent;
                border-bottom: 10px solid #fff;
            }
            li {
                padding: 13px 16px;
                span {
                    margin-bottom: 0;
                }
                .name {
                    float: left;
                }
                .number {
                    float: right;
                }
                &:hover {
                    background:#61ABDA;
                    color: #fff;
                }
            }
        }
    }
</style>


