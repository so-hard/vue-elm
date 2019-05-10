<template>
    <div class="profile-card">
        <div class="card-number" :style="clors">
            <span >{{this.num}}</span>元
        </div>
        <div class="card-kind">
            {{this.type}}
        </div>
    </div>
</template>
    
<script>
export default {
    name: 'CrofileCard',
    props: ['type','clors','num'],
    created() {
        
    }
}
</script>

<style lang="stylus" scoped>
.profile-card
    border-right 1px #E4E7ED solid 
    span 
        font-size 2em
    
</style>

