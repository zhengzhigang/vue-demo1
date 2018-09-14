<template>
    <div class="base">
        <div class="base-header">
            <a href="#" class="logo">
                医生后台
            </a>
        </div>
        <div class="base-nav"></div>
        <div class="base-main"></div>
    </div>
</template>
<script>
export default {
    name: 'base'
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
    .logo {
        float: left;
        width: 236px;
        font-size: 20px;
        color: #fff;
        text-align: center;
        text-decoration: none;
        line-height: 50px;
    }
}
</style>


