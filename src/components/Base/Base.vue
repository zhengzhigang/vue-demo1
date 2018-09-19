<template>
    <div class="base">
        <base-nav-bar :userInfo="userInfo"></base-nav-bar>
        <base-nav :userInfo="userInfo"></base-nav>
        <div class="base-main">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
import BaseNavBar from './BaseNavBar'
import BaseNav from './BaseNav'
export default {
    name: 'Base',
    components: {
        BaseNavBar,
        BaseNav
    },
    data () {
        return {
            userInfo: {}
        }
    },
    created () {
        this.requestUserInfo();
    },
    methods: {
        requestUserInfo () {
            this.$http.get('/account/user').then(res => {
                this.userInfo = res.data;
            });
        }
    }
}
</script>
<style lang="less" scoped>
.base {
    padding-left: 236px;
    padding-top: 50px;
    min-width: 1280px;
    min-height: 100%;
    overflow-y: scroll;
}
</style>



