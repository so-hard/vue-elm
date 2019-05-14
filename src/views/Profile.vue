<template>
    <div>
        <CommentHeader 
            headerText="我的首页"
        />
        <ProfileHeader/>
        <div class="profile-cards">
            <ProfileCard  
            v-for="(card,index) in cards"
            :key="index"
            :type="card.type"
            :clors="card.style"
            :num="card.num"
            />
        </div>
        <div class="profile-ul">
            <ProfileList 
            v-for="(li ,index) in profileUl"
            :key="index"
            :iconName="li.iconname"
            :text="li.text"
            :routerNext='li.routerNext'
            :liColor='li.color'
            :class="addBott(index)"
            />
        </div>
        <ProfileList
            text="在线服务"
            iconName="#icon-serve"
            routerNext="/order"
            liColor='#42a5f5'
            style="margin-bottom: 14vw"
        />
        <FootGuide />
    </div>
</template>

<script>
import CommentHeader from "../components/CommentHeader.vue";
import FootGuide from '../components/FootGuide.vue'
import ProfileHeader from '../components/profile/ProfileHeader.vue'
import ProfileCard from '../components/profile/ProfileCard.vue'
import ProfileList from '../components/profile/ProfileList.vue'


import {mapState} from 'vuex'
// import { userInfo } from 'os';
export default {
    name: 'profile',
    components: {
        CommentHeader,
        ProfileHeader,
        FootGuide,
        ProfileCard,
        ProfileList
    },
    data(){
        return{
            cards:[
                {
                    type: '我的余额',
                    num: '0',
                    style: {
                        color: 'red'
                    },
                },
                {
                    type: '我的优惠',
                    num: '0',
                    style: {
                        color: 'green'
                    },

                },
                {
                    type: '我的积分',
                    num:'0',
                    style: {
                        color: '#f90'
                    },
                }
            ],
            profileUl:[
                {
                    iconname: '#icon-order',
                    text: '我的订单',
                    routerNext: '/order',
                    color: '#ff1744'
                },
                 {
                    iconname: '#icon-vip',
                    text: '会员服务',
                    routerNext: '/order',
                    color: '#01579b'
                },
                {
                    iconname: '#icon-store',
                    text: '在线商场',
                    routerNext: '/order',
                    color: '#311b92'
                }
            ]
        }
    },
    created() {
        console.log(this.userInfo)
        this.initCardData()
    },
    computed:{
    ...mapState({
        userInfo:state => state.user.userInfo,
    }),
    },
    methods: {
        //初始化数据
        initCardData(){
            if(this.userInfo != null){
                this.cards.forEach(
                    (value,index,)=>{
                        // console.log(value,index)
                        if (index == 1) {
                            console.log(this.userInfo.gift_amount)
                            value.num = this.userInfo.gift_amount
                        }
                    }
                )
            }
        },
        addBott(index){
            if(index != 2){
               return 'bootom'
            } 
        }
    },
}
</script>

<style lang='stylus' scoped>
.profile-header
        margin-top 15vw
.profile-cards
    display flex
    margin 2vw 0
    .profile-card
        width 33.3vw
.profile-ul
    margin 0 0 5vw 0
</style>
