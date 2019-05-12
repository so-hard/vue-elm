<template>
    <div class="mist-card" @click="router.push(rou)">
        <div class="card-img">
            <img :src="src" alt="">
        </div>
        <span>{{text}}</span>
    </div>
</template>

<script>
export default {
    name: 'MistCard',
    props: ['src','text','rou'],
    methods: {
    
    }

}
</script>

<style lang="stylus" scoped>
.mist-card
    width 20vw
    display flex
    flex-direction column
    justify-items center
    align-items center
    font-size 0.8em
    .card-img
        height 12vw
        width 12vw
        img 
            height 100%
            width 100%
    // height 20%
</style>
