<template>
    <div>
        <button @click="addCount">点击++</button>
        <button @click="minusCount">点击--</button>
    </div>
</template>
<script>
export default {
    name: 'Demo',
    methods: {
        addCount () {
            this.$store.dispatch('addCount');
        },
        minusCount () {
            this.$store.dispatch('minusCount');
        }
    }
}
</script>

