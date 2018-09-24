<template>
    <div class="mark-down">
        <div class="mark-down-wraperlearfix c">
            <div class="left">
                <textarea class="left-textarea" v-model="markDownHtml"></textarea>
            </div>
            <div class="right">
                <span class="right-text" v-html="markDownHtml1"></span>
            </div>
        </div>
    </div>
</template>
<script>
import marked from 'marked'

export default {
    name: 'MarkDown',
    data () {
        return {
            markDownHtml: ''
        }
    },
    computed: {
        markDownHtml1 () {
            return marked(this.markDownHtml, { sanitize: true });
        }
    }
}
</script>
<style lang="less" scoped>
.mark-down-wraperlearfix {
    width: 70%;
    margin: auto;
    .left, .right {
        float: left;
        width: 48%;
    }
    .right {
        margin-left: 4%;
    }
    .left-textarea {
        display: block;
        height: 400px;
        background: #ddd;
    }
    .right-text {
        display: block;
        height: 400px;
        background-color: #ddd;
    }
}
</style>

