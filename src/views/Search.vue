<template>
    <div>
        <CommentHeader
        headerText="搜索"
        />
        search
        <FootGuide />
    </div>
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

</style>
