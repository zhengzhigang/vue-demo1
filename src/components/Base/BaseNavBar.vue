<template>
    <div class="base-header">
        <a href="#" class="logo">医生后台</a>
        <ul class="nav-bar clearfix">
            <li>
                <a href="#">通知</a>
            </li>
            <li>
                <a href="#">私信</a>
            </li>
            <li>
                <a href="#">联系我们</a>
            </li>
            <li class="user">
                <a href="#">丽都医疗</a>
                <div class="dropdown-user">
                    <div class="user-header">
                        <span class="img"></span>
                        <p>丽都医疗</p>
                    </div>
                    <div class="user-body">
                        <span class="user-btn">个人资料</span>
                        <span class="user-btn">财务资料</span>
                        <span class="user-btn">修改密码</span>
                    </div>
                    <div class="user-footer clearfix">
                        <span class="user-btn logout">退出登录</span>
                    </div>
                </div>
            </li>
            <li>
                <a href="#">切换账号</a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'BaseNavBar'
}
</script>

<style lang="less" scoped>
.base-header {
    position: fixed;
    width: 100%;
    height: 50px;
    padding: 0 15px;
    left: 0;
    right: 0;
    top: 0;
    background: rgba(76, 166, 217, 0.9);
    z-index: 1;
    .logo {
        float: left;
        width: 236px;
        margin-left: -15px;
        font-size: 20px;
        color: #fff;
        text-align: center;
        text-decoration: none;
        line-height: 50px;
    }
    .nav-bar {
        float: right;
        li {
            position: relative;
            float: left;
        }
        a {
            display: block;
            padding: 0 20px;
            line-height: 50px;
            color: #fff;
            &:hover {
                background: #2A80B0;
            }
        }
        .user:hover {
            .dropdown-user {
                display: block;
            }
        }
        .dropdown-user {
            display: none;
            position: absolute;
            top: 50px;
            right: 0;
            width: 400px;
            background: #F5F5F5;
            box-shadow: 0px 0px 4px 0px #0F4E6A;
        }
        .user-header {
            padding: 27px 0;
            text-align: center;
            background: #5CAEDC;
            font-size: 18px;
            color: #fff;
            text-align: center;
            .img {
                display: inline-block;
                width: 50px;
                height: 50px;
                border-radius: 100%;
                background: #fff;
            }
        }
        .user-body {
            padding: 12px;
            display: flex;
            justify-content: space-between;
            background: #fff;
            .user-btn {
                padding: 6px 8px;
                cursor: pointer;
                color: #2A80B0;
                &:hover {
                    background: #E1F4FF;
                }
            }
        }
        .user-footer {
            padding: 16px 12px;
            .user-btn {
                float: right;
                padding: 6px 8px;
                font-size: 14px;
                color: #2A80B0;
                background: transparent;
                cursor: pointer;
                border: 1px solid #D5D5D5;
                &:hover {
                    color: #2A80B0;
                    background: #E1F4FF;
                }
            }
        }
    }
}
</style>