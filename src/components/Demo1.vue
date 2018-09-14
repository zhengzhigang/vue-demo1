<template>
    <div class="demo1">
        <h1>这里是Demo1+{{title}}</h1>
        <div>
            <slot name="header"></slot>
            <slot name="footer"></slot>
            <slot>这里是插槽的默认内容</slot>
            <router-link to="/about">Go to About</router-link>
            <router-link to="/success">Go to Success</router-link>
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Demo1',
    props: {
        title: Number
    }
}
</script>

