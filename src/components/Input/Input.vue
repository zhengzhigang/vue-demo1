<template>
    <div>
        <input type="text" v-model="value" :placeholder="customPlaceholder">
        <span>输入的内容经过过滤器处理后为：{{value | getInputValue | getValue}}</span>
        <button @click="stus[0].name = 'asd'">监视对象</button>
        <hr>
        <div :style="[$style.background]">
            <h2>计算器</h2>
            <input type="text" v-model="num1">+
            <input type="text" v-model="num2">*
            <input type="text" v-model="num3">+
            ={{sumnum}}
        </div>
        <hr>
        <div>
            <h2>子组件向父组件传递</h2>
            <button @click="changeParentText">修改父组件的内容</button>
        </div>
        <hr>
        <div>
            <h2>自定义指令</h2>
            <div>
                <p v-show-color:foo="color">{{num}}</p>
                <button @click="addnum">增加</button>
            </div>
            <router-link to="/login">go to demo3</router-link>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Input',
    props: {
        'customPlaceholder': {
            type: String
        }
    },
    data() {
        return {
            value: '',
            stus: [{name: 'a'}],
            num1: 0,
            num2: 0,
            num3: 0,
            toParent: '我是从子组件传递过来的数据',
            num: 0,
            color: 'red'
        }
    },
    filters: {
        getValue(str) {
            if (!str) {
                return null;
            }
            return str + '呵呵呵';
        }
    },
    watch: {
        value (newVal, oldVal) {
            if (newVal === 'a') {
                return 'asas';
            }
        },
        stus: {
            deep: true,
            handler (newVal, oldVal) {
                console.log(newVal, oldVal);
            }
        }
    },
    directives: {
        'show-color': {
            bind () {
                console.log('bind');
            },
            inserted (el, bind) {
                console.log('inserted', bind)
            },
            update (el, bind) {
                console.log('update', bind);
            },
            componentUpdate () {
                console.log('componentUpdate');
            }
        }
    },
    computed: {
        sumnum () {
            return (parseInt(this.num1) + parseInt(this.num2)) * parseInt(this.num3);
        }
    },
    methods: {
        changeParentText () {
            this.$emit('changeTheText', this.toParent);
        },
        addnum () {
            this.num++;
        }
    }
}
</script>
<style module>
.background {
    background: red;
}
</style>

