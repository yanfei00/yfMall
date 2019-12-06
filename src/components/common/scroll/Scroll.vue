<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>

 import BScroll from 'better-scroll'
 export default {
   name: "Scroll",
   data() {
     return {
       bscroll:null
     }
   },
   props:{
     probeType:{
       type:Number,
       defaule:0
     },
     pullUpLoad:{
       type:Boolean,
       defaule:false
     }
   },
   mounted() {
     this.bscroll = new BScroll(this.$refs.wrapper,{
       click:true,
       probeType:this.probeType,
       pullUpLoad:this.pullUpLoad
     });

     this.bscroll.on('scroll',(position) => {
       console.log(position);
       this.$emit('scroll', position)
     })
     this.bscroll.on('pullingUp', () => {
       this.$emit('pullingUp')
     })
   },
   methods: {
     scrollToTop(x,y,time=300) {
       this.bscroll.scrollTo(x,y,time);
     },
     finishPullUp() {
       this.bscroll.finishPullUp();
     }
   },
}
</script>

<style scoped>

</style>