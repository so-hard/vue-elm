<template>
    <section class="search">
        <CommentHeader
        headerText="搜索"
        />
        <section>

        </section>
        <FootGuide />
    </section>
</template>

<script>
import FootGuide from '../components/FootGuide.vue'
import CommentHeader from "../components/CommentHeader.vue";

export default {
    name: 'search',
    components: {
        FootGuide,
        CommentHeader
    }
}
</script>

<style lang='stylus' scoped>
.search
    height 100vh
</style>
