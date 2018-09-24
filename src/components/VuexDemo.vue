<template>
    <div class="vuex-demo">
        <h1>{{msg}}</h1>
        <p>{{count}}</p>
        <button @click="addCount">count++</button>&nbsp;
        <button @click="reduceCount">count--</button>
        <br>
        <button @click="addAction">count++</button>&nbsp;
        <button @click="reduceAction">count--</button>
    </div>
</template>
<script>
import store from '../vuex/store'
import {mapState, mapMutations, mapGetters, mapActions} from 'vuex'
export default {
    name: 'VuexDemo',
    data () {
        return {
            msg: 'Hello Vuex'
        }
    },
    store,
    methods: {
        ...mapActions(['addAction', 'reduceAction']),
        addCount () {
            this.$store.commit('add', 10);
        },
        reduceCount () {
            this.$store.commit('reduce');
        }
    },
    computed:{
        ...mapState(['count']),
        ...mapGetters(['count'])
    }
}
</script>
<style>
.vuex-demo {
    padding: 200px;
    background: #fff;
}
</style>


