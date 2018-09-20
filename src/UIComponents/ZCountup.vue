<template>
    <span ref="countup"></span>
</template>
<script>
import CountUp from 'countup'
export default {
    props: {
        start: {
            type: Number,
            default: 0
        },
        end:  {
            type: Number,
            required: true
        },
        decimal: {
            type: String,
            default: '.'
        },
        decimalNum: {
            type: Number,
            default: 0
        },
        duration: {
            type: Number,
            default: 2
        }
    },

    data () {
        return {
            number: null
        }
    },
    mounted () {
        this.initCountUp();
    },
    methods: {
        initCountUp () {
            let options = {
                useEasing: true, 
                useGrouping: true, 
                separator: '', 
                decimal: this.decimal, 
            };
            this.number = new CountUp(this.$refs.countup, this.start, this.end, this.decimalNum, this.duration, options);
            if (!this.number.error) {
            this.number.start();
            } else {
              console.error(this.number.error);
            }
        }
    }
}
</script>

