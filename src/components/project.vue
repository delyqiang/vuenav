<template>
<div>
    <h3 class="homeTitle">myProject</h3>
        <div  class="tool">
        <a :href="item.toolLink" v-for="(item,index) in toolArr.project" :key="index" target="_blank">
                <div class="inlineBorder">
                <h4>{{item.toolName}}</h4>
                <p>{{item.toolDetails}}</p>
        </div>
        </a>
    </div>
    <h3 class="homeTitle">小资H5</h3>
        <div  class="tool">
        <a :href="item.toolLink" v-for="(item,index) in toolArr.xiaozi" :key="index" target="_blank">
                <div class="inlineBorder">
                <h4>{{item.toolName}}</h4>
                <p>{{item.toolDetails}}</p>
        </div>
        </a>
    </div>
    <h3 class="homeTitle">pilipaH5</h3>
        <div  class="tool">
        <a :href="item.toolLink" v-for="(item,index) in toolArr.pilipa" :key="index" target="_blank">
                <div class="inlineBorder">
                <h4>{{item.toolName}}</h4>
                <p>{{item.toolDetails}}</p>
        </div>
        </a>
    </div>
    <h3 class="homeTitle">微信扫码的h5</h3>
        <div  class="tool">
        <a :href="item.toolLink" v-for="(item,index) in toolArr.wechartProject" :key="index" target="_blank">
                <div class="inlineBorder">
                <h4>{{item.toolName}}</h4>
                <p>{{item.toolDetails}}</p>
                <img class="qRcode" :src="item.toolImg" alt="">
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
    position: relative;
}
a h4{
    color: #000;
}
a p{
    font-size: 12px;
    color: #999;
}
.homeTitle{
    color: #4fc08d;
    text-align: left;
    padding-left: 16px;
}
.qRcode{
    position: absolute;
    top: 10px;
    left: 5px;
    width: 80px;
}
</style>
