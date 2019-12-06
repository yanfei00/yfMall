<template>
  <div class="goodList">
    <GoodListItem v-for="(item,index) in glist" :key="index" :item='item'>
    </GoodListItem>
  </div>
</template>

<script>
import GoodListItem from './GoodListItem'
 export default {
   name: "GoodList",
   components:{
    GoodListItem
   },
   props:{
     glist:{
       type:Array,
       default() {
         return []
       }
     }
   }
}
</script>

<style scoped>
.goodList {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2px;
}
</style>