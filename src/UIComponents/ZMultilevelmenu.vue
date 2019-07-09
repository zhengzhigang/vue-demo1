<template>
    <li @click.stop="toggle" :key="idx" :class="customClass">
        <a>{{item.label}}</a>
        <ul :class="item.test==1?'test2':'test3'">
            <z-multilevelmenu v-if="item.children" v-for="(a, index) in item.children" :item="a" :class="a.test==2?'test2-item':'test3-item'" v-show="showChild" :key="index"></z-multilevelmenu>
        </ul>
    </li>
</template>
<script>
  export default{
    name: "ZMultilevelmenu",
    props: {
        item: {
            type: Object
        },
        idx: {
            type: Number
        },
        customClass: {
            type: String
        }
    },
    data () {
        return {
            showChild: false
        }
    },
    methods: {
        toggle () {
            this.showChild = !this.showChild;
        }
    }
}
</script>
<style lang="less" scoped>
.test2 {
    padding-left: 20px;
}
.test3 {
    padding-left: 20px;
}
ul {
    margin-top: 20px;
}
</style>

