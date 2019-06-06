<template>
    <div class="mist-card" @click="goto">
        <div class="card-img">
            <img :src="imgBase+src" alt="">
        </div>
        <span>{{text}}</span>
    </div>
</template>

<script>
export default {
    name: 'MsiteCard',
    props: ['src','text','rou'],
    data(){
        return {
            imgBase: "https://fuss10.elemecdn.com",
        }
    },
    methods: {
        goto(){
            this.$router.push('shop')
        }
    }
}
</script>

<style lang="stylus" scoped>
.mist-card
    width 24vw
    height 22vw
    display flex
    flex-direction column
    justify-items center
    align-items center
    font-size 0.8em
    .card-img
        height 15vw
        width 15vw
        img 
            height 100%
            width 100%
    // height 20%
</style>
