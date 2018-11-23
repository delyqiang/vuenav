<template>
  <div class="info">
    <div  v-for="(item,index) in informationArr" :key="index" v-if="index>0">
        <ul>
          <li  v-for="(item2,index) in item.split('* [')" :key="index" v-if="index>0">
            <p>
              <a :href="item2.substring(item2.lastIndexOf('(')+1,item2.length-3)" target="_blank">{{item2.substring(0,item2.lastIndexOf('('))}}</a>
            </p>
          </li>
        </ul>
        <hr>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      informationArr:[],//资讯
    }
  },
    methods: {
      getData () { 
         this.$http.get('/apis/README.md',{
          }).then(function(result) {
              this.informationArr=result.data.split("---")
              // console.log(this.informationArr)
          }.bind(this))
      }
  },
  created() {
      this.getData()
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
  text-align: left;
}
li {
  display: block;
  margin: 0 10px;
}
a {
  color: #42b983;
  text-decoration: none;
}
div hr{
      border: none;
    border-bottom: 1px solid #eee;
    margin: 2em 0;
}
</style>
