<template>
    <div class="base">
        <base-nav-bar />
        <base-nav />
        <div class="base-main">
            <div class="base-main-wraper">
                <my-button></my-button>
                <div>
                    <h2>MarkeDown编辑器</h2>
                    <mark-down></mark-down>
                </div>
                <p>这里展示子组件传过来的文字：{{receiveChildText}}</p>
                <my-input :customPlaceholder="placeholder" @changeTheText="changeTheText" />
            </div>
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
            placeholder: '请输入内容',
            receiveChildText: ''
        }
    },
    mounted () {
        console.log(this.$route)
    },
    methods: {
        changeTheText (val) {
            this.receiveChildText = val;
        }
    }
}
</script>
<style>
.base-main {
    padding-left: 236px;
}
.base-main-wraper {
    margin: 20px 15px;
}
</style>



