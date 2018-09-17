<template>
    <button class="z-button" :class="[className]" @click="triggerEvent">
        {{text}}
    </button>
</template>
<script>
export default {
    name: 'ZButton',
    props: {
        type: {
            type: String,
            default: 'info'
        },
        className: {
            type:String
        },
        text: {
            type: String,
            default: '确定'
        }
    },
    methods: {
        triggerEvent () {
            this.$emit('z-button-event');
        }
    }
}
</script>
<style lang="less" scoped>
.z-button {
    width: 12.14%;
    max-width: 171px;
    height: 42px;
    font-size: 16px;
    border-radius: 4px;
    margin-left: 5px;
    color: #fff;
    background: linear-gradient(90deg, #00E1E5 -30%, #00C6EF 57%, #0097FF 150%);
}
</style>


