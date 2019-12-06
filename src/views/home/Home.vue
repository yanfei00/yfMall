<template>
 <div id="home">
   <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <Scroll class="content"
            ref='scroll' 
            :probeType='3' 
            :pullUpLoad='true'
            @scroll='contentScroll'
            @pullingUp='pullingUp'
           >
      <home-swiper :banners='banners'></home-swiper>
      <recommend-view :recommends='recommends'></recommend-view>
      <FeatureView></FeatureView>
      <TabControl :titles=titles @itemClick='itemClick' ></TabControl>
      <GoodList :glist="goods[currentTab].list"></GoodList>
    </Scroll>
    <!-- 组件监听原生事件需要在click后面加上.native -->
    <BackTop @click.native='backTopClick' v-show="backTopIsShow"></BackTop> 
 </div>
</template>

<script>

  import HomeSwiper from './chiidComponents/HomeSwiper'
  import RecommendView from './chiidComponents/RecommendView' 
  import FeatureView from './chiidComponents/FeatureView'

  import NavBar from 'components/common/navbar/NavBar'
  import TabControl from 'components/content/TabControl/TabControl'
  import GoodList from 'components/content/Goods/GoodList'
  import Scroll from 'components/common/scroll/Scroll'
  import BackTop from 'components/content/backTop/BackTop'


  import {getHomeMultidata,getHomeData} from 'network/home'

  export default {
    name: "Home",
    components:{
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl,
      GoodList,
      Scroll,
      BackTop
    },
    data() {
      return {
          banners:[],
          recommends:[],
          titles:['流行','新款','精选 '],
          goods:{
            'pop':{page:0,list:[]},
            'new':{page:0,list:[]},
            'sell':{page:0,list:[]},
          },
          currentTab:'pop',
          backTopIsShow:false
      }
    },
    created() {
      this.getHomeMultidata();
      this.getHomeData('pop');
      this.getHomeData('new');
      this.getHomeData('sell');
    },
    methods: {
      itemClick(index) {
        console.log(index);
        switch (index) {
          case 0:
            this.currentTab = 'pop';
            break;
          case 1:
            this.currentTab = 'new';
            break;
          case 2:
            this.currentTab = 'sell';
            break;
        }

      },
      backTopClick() {
        this.$refs.scroll.scrollToTop(0,0);
      },
      contentScroll(position) {
        this.backTopIsShow = (-position.y) > 1000
      },
      pullingUp() {
        this.getHomeData(this.currentTab);
      },
      getHomeMultidata(){
        getHomeMultidata().then(res => {
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
      },
      getHomeData(type) {
        const page = this.goods[type].page + 1;
        getHomeData(type,page).then(res =>{
          console.log(res);
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1;
          this.$refs.scroll.finishPullUp();
        })
      }
    },
  }
</script>

<style scoped>
  #home {
    padding: 44px 0 49px;
    height: 100vh;

    position: relative;
  }
  .home-nav {
    background-color:var(--color-tint);
    color: #fff;
  }
  .content {
    /* 
      因为设置了padding home得高度是100vh视口高度   所以找个地方是100%
      这是第一种方法
    */
    /* height: 100%; */

    /* 第二种方法  使用绝对定位*/
    position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 49px;
  }
</style>
