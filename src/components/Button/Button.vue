<template>
    <button>{{buttonText}}</button>
</template>
<script>
export default {
    name: 'Button',
    data () {
        return {
            buttonText: '这是一个全局的button组件'
        }
    }
}
</script>
