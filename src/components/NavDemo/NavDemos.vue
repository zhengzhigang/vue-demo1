<template>
<div>
    <li v-for="(item, index) in items" :key="index" @click.stop="toggleClick(index)">
        <div><span>{{item.title}}</span></div>
        <ul v-if="item.subsnav" v-show="index == current && showChilds">
            <li v-for="a in item.subsnav">
                {{a.title}}
            </li>
        </ul>
    </li>
</div>
</template>
<script>
export default {
    name: 'navdemos',
    props: {
        items: {
            type: Array,
            required: true
        }
    },
    data () {
        return {
            current: null,
            showChilds: false
        }
    },
    methods: {
        toggleClick (idx) {
            this.current = idx;
            this.showChilds = !this.showChilds;
        }
    }
}
</script>

