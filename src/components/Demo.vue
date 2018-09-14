<template solt="header">
    <div class="demo">
        <Demo1 :title="2">
            <template slot="header">
                <h1></h1>
            </template>

            <p>A paragraph for the main content.</p>
            <p>And another one.</p>

            <template slot="footer">
                <p>Here's some contact info</p>
            </template>
            <div>
                <button @click="show = !show">点击切换</button>
                <transition name="bounce">
                    <p v-if="show">hello</p>
                </transition>
            </div>
            <div>
                自定义指令
                <input class="custom-zhiling" type="text" v-autoFocus>
            </div>
        </Demo1>
    </div>
</template>

<script>
import Demo1 from './Demo1.vue'
export default {
    name: 'Demo',
    components: {Demo1},
    data () {
        return {
             soltText: '这里是插槽的作用于对象',
             show: false
        }
    },
    directives: {
        autoFocus: {
            inserted (el) {
                el.focus();
            }
        }
    }
}
</script>
<style>
    .custom-zhiling {
        display: block;
        width: 200px;
        margin: auto;
        border: 1px solid #eee;
    }
    .active {
        background-color: red;
        color: #fff;
    }
    .bounce-enter-active {
        animation: bounce-in 5s;
    }
    .bounce-leave-active {
        animation: bounce-in 5s reverse;
    }
    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.5);
        }
        100% {
            transform: scale(1);
        }
    }
</style>


