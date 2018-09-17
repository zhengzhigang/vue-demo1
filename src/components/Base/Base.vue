<template>
    <div class="base">
        <base-nav-bar></base-nav-bar>
        <base-nav></base-nav>
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



