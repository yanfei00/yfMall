<template>
  <div class="goods-items">
   <img :src="item.show.img" alt="">
   <div class="goods-info">
     <p>{{item.title}}</p>
     <span class="price">{{item.price}}</span>
     <span class="cfav">{{item.cfav}}</span>
   </div>
  </div>
</template>

<script>
 export default {
   name: "GoodListItem",
   props:{
     item:{
       type:Object,
       default() {
         return {}
       }
     }
   }
}
</script>

<style scoped>
.goods-items {
  width: 48%;}
 
.goods-items img {
  width: 100%;
  border-radius: 5px;
}
.goods-info {
  height: 50px;
  font-size: 13px;
  text-align: center;
  color: #aaa;
}
.goods-info p {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  line-height: 30px;
 
}
.goods-info .price {
  margin-right: 20px;
  color: var(--color-tint);
}
.goods-info .cfav {
  position: relative;
}

.goods-info .cfav::before {
  content: '';
  position: absolute; 
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url('~assets/img/common/collect.svg') 0 0/14px 14px;

}
</style>