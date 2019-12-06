<template>
  <div class="tabcontrol">
    <div v-for="(item,index) in titles" 
        :key="index" 
        class="item" 
        :class="{active:currentIndex == index}"
        @click="itemClick(index)"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
 export default {
   name: "TabControl",
   data() {
     return {
        currentIndex:0
     }
   },
   props:{
     titles:{
       type:Array,
       defaule() {
         return []
       }
     }
   },
   methods: {
     itemClick(index) {
       this.currentIndex = index;
       this.$emit('itemClick', index)
     }
   },
   
}
</script>

<style scoped>
  .tabcontrol {
    display: flex;
   text-align: center;
   height: 40px;
   line-height: 40px;
   background-color: #fff;
  }
  .item {
    flex: 1;
  }
  .active {
    color: var(--color-tint);
   
  }
  .active span {
     border-bottom: 2px solid #ff8198;
     padding: 5px;
  }
</style>