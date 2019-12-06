<template>
  <div class="recommend">
    <div v-for="(item,index) in recommends" :key="index" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
    
  </div>
</template>

<script>
 export default {
   name: "Recommend",
   props:{
     recommends:{
       type:Array,
       defaule() {
         return []
       }
     }
   }
}
</script>

<style scoped>
  .recommend {
    display: flex;
    padding: 10px 0 20px;
    border-bottom: 8px solid #eee;
    text-align: center;
    font-size: 12px;
  }
  .recommend-item {
    flex: 1;
  }
  .recommend-item img {
    width: 70px;
    height: 70px;
    margin-bottom: 5px;
  }
</style>