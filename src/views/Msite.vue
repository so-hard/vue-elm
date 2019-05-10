<template>
  <div @click="City()">
    <CommentHeader

      headerText="1"
      headerIcon="#icon-search"
      lastIcon="#icon-profile"
      routerNext="/order"
    />Msite
    <FootGuide/>
  </div>
</template>

<script>
import FootGuide from "../components/FootGuide.vue";
import CommentHeader from "../components/CommentHeader.vue";
import { getCity } from "../serve/getData";

export default {
  name: "msite",
  components: {
    FootGuide,
    CommentHeader
  },
  data() {
    return {

    };
  },
  methods:{
      City(){
        getCity()
  }
  }
};
</script>

<style lang='stylus' scoped></style>
