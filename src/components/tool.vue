<template>
  <div class="tool">
      <a :href="item.toolLink" v-for="(item,index) in toolArr.result" :key="index" target="_blank"  :title="item.toolName">
             <div class="inlineBorder">
                  <img class="toolBackImg" :src="item.toolImg" alt="">
                <h4>{{item.toolName}}</h4>
                <p>{{item.toolDetails}}</p>
        </div>
      </a>
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
.toolBackImg{
    position: absolute;
    top: 10px;
    left: 5px;
    width: 80px;
    height: 80px;
    border-radius: 80px;
    border: 1px solid #689eff;
    z-index: 0;
}
</style>
