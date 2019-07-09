<template>
    <div class="nav">
        <ul>
            <li v-for="(item, index) in items" :key="index" @click.stop="toggleClick(index)">
                <div><span>{{item.title}}</span></div>
                <ul v-if="item.subnav" v-show="current == index && showChild">
                    <nav-demos :items="item.subnav"></nav-demos>
                </ul>
            </li>
        </ul>
    </div>
</template>
<script>
import NavDemos from '@/components/NavDemo/NavDemos'
export default {
    name: 'navdemo',
    components: {
        NavDemos
    },
    props: {
        items: {
            type: Array,
            required: true
        }
    },
    data () {
        return {
            current: null,
            showChild: false
        }
    },
    methods: {
        toggleClick (idx) {
            this.current = idx;
            this.showChild = !this.showChild;
        }
    }
}
</script>

