<template>
    <div v-if="show" class="z-toast" :class="className">
        {{text}}
    </div>
</template>
<script>
export default {
    name: 'ZToast',
    props: {
        text: {
            type: String,
            default: '',
            required: true
        },
        show: {
            type: Boolean,
            default: false
        },
        type: {
            type: String,
            default: 'success'
        }
    },
    computed: {
        className () {
            return {
                'z-toast-success': this.type === 'success',
                'z-toast-info': this.type === 'info',
                'z-toast-error': this.type === 'error',
                'z-toast-warn': this.type === 'warn'
            }
        }
    },
    watch: {
        show (val) {
            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
                this.$emit('update:show', false)
            }, 2000);
        }
    }
}
</script>
<style lang="less" scoped>
.z-toast {
    position: fixed;
    top: 120px;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px 20px;
    font-size: 14px;
    border-radius: 4px;
    box-shadow: 0 0 10px 0 rgba(0,0,0,.1);
    &-success {
        background-color: #E9FFE8;
        color: #6BB549;
        border: 1px solid rgba(201, 244, 172, 1);
    }
    &-info {
        background-color: #E1F4FF;
        color: #5CAEDC;
        border: 1px solid rgba(200, 235, 255, 1);
    }
    &-warn {
        background-color: #FFF4D5;
        color: #EFA402;
        border: 1px solid rgba(251, 225, 149, 1);
    }
    &-error {
        background-color: #FFE3E3;
        color: #EC4363;
        border: 1px solid rgba(255, 200, 193, 1);
    }
}
</style>


