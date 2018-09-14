<template>
    <div class="base">
        <BaseNavBar />
        <BaseNav />
        <div class="base-main"></div>
    </div>
</template>
<script>
import BaseNavBar from './BaseNavBar'
import BaseNav from './BaseNav'
export default {
    name: 'Base',
    components: {
        BaseNavBar,
        BaseNav
    }
}
</script>


