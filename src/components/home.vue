<template>
  <div>
      <h3 class="homeTitle">常用</h3>
      <div  class="tool">
            <a :href="item.toolLink" v-for="(item,index) in toolArr.home" :key="index" target="_blank">
             <div class="inlineBorder">
                  <img class="toolBackImg" :src="item.toolImg" alt="">
                <h4>{{item.toolName}}</h4>
                <p>{{item.toolDetails}}</p>
        </div>
      </a>
      </div>
      <h3 class="homeTitle">vue</h3>
      <div  class="tool">
            <a :href="item.toolLink" v-for="(item,index) in toolArr.vue" :key="index" target="_blank">
             <div class="inlineBorder">
                <h4>{{item.toolName}}</h4>
                <p>{{item.toolDetails}}</p>
        </div>
      </a>
      </div>
      <h3 class="homeTitle">微信</h3>
      <div  class="tool">
            <a :href="item.toolLink" v-for="(item,index) in toolArr.wechart" :key="index" target="_blank">
             <div class="inlineBorder">
                <h4>{{item.toolName}}</h4>
                <p>{{item.toolDetails}}</p>
        </div>
      </a>
      </div>
      <h3 class="homeTitle">友链</h3>
      <div  class="tool">
            <a :href="item.toolLink" v-for="(item,index) in toolArr.link" :key="index" target="_blank">
             <div class="inlineBorder">
                <h4>{{item.toolName}}</h4>
                <p>{{item.toolDetails}}</p>
        </div>
      </a>
      </div>
      <h3 class="homeTitle">娱乐</h3>
      <div  class="tool">
            <a :href="item.toolLink" v-for="(item,index) in toolArr.entertainment" :key="index" target="_blank">
             <div class="inlineBorder">
                  <img class="toolBackImg" :src="item.toolImg" alt="">
                <h4>{{item.toolName}}</h4>
                <p>{{item.toolDetails}}</p>
        </div>
      </a>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      toolArr:[],//资讯
    }
  },
    methods: {
    
     getToolJson () {
         this.$http.get('static/tool.json',{
          }).then(function(result) {
              this.toolArr=result.data
                // console.log(this.toolArr)
          }.bind(this))
     }
  },
  created() {
      this. getToolJson()
    }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tool{
    display: flex;
     -webkit-box-pack: left;
    -ms-flex-pack: left;
    justify-content: left;
    width: 100%;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    position: relative;
}
.inlineBorder{
width: 300px;
    height: 100px;
    border: 1px solid #ddd;
    border-radius: 5px;
    position: relative;
    cursor: pointer;
    display: inline-block;
    margin: 6px 16px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
a h4{
    color: #000;
}
a p{
    font-size: 12px;
    color: #999;
    position: absolute;
    width: 80%;
    left: 10%;
    margin: 0;
    top: 60px;
}
.homeTitle{
    color: #4fc08d;
    text-align: left;
    padding-left: 16px;
}
.toolBackImg{
    position: absolute;
    top: 10px;
    left: 5px;
    width: 80px;
    height: 80px;
    border-radius: 80px;
    border: 1px solid #4fc08d;
    z-index: 0;
}
</style>
