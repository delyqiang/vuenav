<template>
   <div class="h5Content"   id="top"  ref="viewBox" v-loading.fullscreen.lock="fullscreenLoading">
       <div class="logoLeft">
           <img src="./../../static/img/logo1.png" class="logoImg" alt="">
       </div>
       <div class="headerSeach" >
           <el-input class="searchInput" v-model="search" @keyup.enter.native="bingSearch()"></el-input>
           <el-button class="searchBtn" @click="bingSearch">Search</el-button>
       </div>
       <div class="bannerBack">
           <img  :src="banner">
       </div>

       <div id="commonly" class="toolBack">
           <p><i class="el-icon-date" style="font-size: 20px;color: #2774fd;margin-top:5px;"></i>常用</p>
           <ul class="toolList">
               <li  v-for="(item,index) in toolArr.home" :key="index">
                    <a :href="item.toolLink" target="_blank" :title="item.toolName">
                       {{item.toolName}}
                </a>
               </li>
           </ul>
       </div>
       <div  class="toolBack">
           <p><i class="el-icon-date" style="font-size: 20px;color: #2774fd;margin-top:5px;"></i>vue</p>
           <ul class="toolList">
               <li  v-for="(item,index) in toolArr.vue" :key="index">
                    <a :href="item.toolLink" target="_blank" :title="item.toolName">
                       {{item.toolName}}
                </a>
               </li>
           </ul>
       </div>
       <div  class="toolBack">
           <p><i class="el-icon-date" style="font-size: 20px;color: #2774fd;margin-top:5px;"></i>微信</p>
           <ul class="toolList">
               <li  v-for="(item,index) in toolArr.wechart" :key="index">
                    <a :href="item.toolLink" target="_blank" :title="item.toolName">
                       {{item.toolName}}
                </a>
               </li>
           </ul>
       </div>
       <div  class="toolBack">
           <p><i class="el-icon-date" style="font-size: 20px;color: #2774fd;margin-top:5px;"></i>友链</p>
           <ul class="toolList">
               <li  v-for="(item,index) in toolArr.link" :key="index">
                    <a :href="item.toolLink" target="_blank" :title="item.toolName">
                       {{item.toolName}}
                </a>
               </li>
           </ul>
       </div>
       <div  class="toolBack">
           <p><i class="el-icon-date" style="font-size: 20px;color: #2774fd;margin-top:5px;"></i>娱乐</p>
           <ul class="toolList">
               <li  v-for="(item,index) in toolArr.entertainment" :key="index">
                    <a :href="item.toolLink" target="_blank" :title="item.toolName">
                       {{item.toolName}}
                </a>
               </li>
           </ul>
       </div>
       <div id="tool"   class="toolBack">
            <p><i class="el-icon-goods" style="font-size: 20px;color: #2774fd;margin-top:5px;"></i>工具</p>
           <ul class="toolList">
               <li  v-for="(item,index) in toolArr.result" :key="index">
                    <a :href="item.toolLink" target="_blank" :title="item.toolName">
                       {{item.toolName}}
                </a>
               </li>
           </ul>
       </div>
       <div id="product"  class="toolBack">
          <p><i class="el-icon-edit-outline" style="font-size: 20px;color: #2774fd;margin-top:5px;"></i>项目</p>
           <ul class="toolList">
               <li  v-for="(item,index) in toolArr.project" :key="index">
                    <a :href="item.toolLink" target="_blank" :title="item.toolName">
                       {{item.toolName}}
                </a>
               </li>
               <li  v-for="(item,index2) in toolArr.xiaozi" :key="index2+30">
                    <a :href="item.toolLink" target="_blank" :title="item.toolName">
                       {{item.toolName}}
                </a>
               </li>
               <li  v-for="(item,index3) in toolArr.pilipa" :key="index3+50">
                    <a :href="item.toolLink" target="_blank" :title="item.toolName">
                       {{item.toolName}}
                </a>
               </li>
               <li  v-for="(item,index4) in toolArr.wechartProject" :key="index4+80">
                    <a :href="item.toolLink" target="_blank" :title="item.toolName">
                       {{item.toolName}}
                </a>
               </li>
           </ul>
       </div>
       <div id="chat"  class="toolBack">
           <p><i class="el-icon-message" style="font-size: 20px;color: #2774fd;margin-top:5px;"></i>陪聊</p>
           <iframe :src="src"></iframe>
           <p class="copy">Copy©2019 dlq.CN Hou mian Do Shi Xia Bian De</p>
       </div>

       <div class="footer">
           <ul>
               <li data-index='0' :class="ins==0?'active':''" @click="active(0)"   v-if="ins!=0">
                   <a href="#commonly">
                        <i class="el-icon-date" style="font-size: 30px;color: #2774fd;margin-top:5px;"></i>
                        <a href="#commonly" >常用</a>
                   </a>
               </li>
               <li data-index='0' :class="ins==0?'active':''" @click="active()"  v-else-if="ins==0" >
                   <a href="#top">
                        <i class="el-icon-arrow-up"  style="font-size: 30px;color: #2774fd;margin-top:5px;"></i>
                        <a >回顶部</a>
                   </a>
               </li>
               <li data-index='1' :class="ins==1?'active':''" @click="active(1)" v-if="ins!=1">
                   <a href="#tool">
                        <i class="el-icon-goods"  style="font-size: 30px;color: #2774fd;margin-top:5px;"></i>
                        <a href="#tool" >工具</a> 
                   </a>
               </li>
               <li data-index='1' :class="ins==1?'active':''" @click="active()"   v-else-if="ins==1">
                   <a href="#top">
                        <i class="el-icon-arrow-up"   style="font-size: 30px;color: #2774fd;margin-top:5px;"></i>
                        <a>回顶部</a>
                   </a>
               </li>
               <li data-index='2' :class="ins==2?'active':''" @click="active(2)"  v-if="ins!=2" >
                    <a href="#product" >
                        <i class="el-icon-edit-outline"   style="font-size: 30px;color: #2774fd;margin-top:5px;"></i>
                        <a href="#product">项目</a>
                    </a>
               </li>
               <li data-index='2' :class="ins==2?'active':''" @click="active()"  v-else-if="ins==2" >
                    <a href="#top">
                        <i class="el-icon-arrow-up"   style="font-size: 30px;color: #2774fd;margin-top:5px;"></i>
                        <a>回顶部</a>
                    </a>
               </li>

               <li data-index='3' :class="ins==3?'active':''" @click="active(3)"  v-if="ins!=3"  >
                   <a href="#chat">
                        <i class="el-icon-message"    style="font-size: 30px;color: #2774fd;margin-top:5px;"></i>
                        <a href="#chat" >陪聊</a>
                    </a>
               </li>
               <li :class="ins==3?'active':''" @click="active()"  v-else-if="ins==3" >
                    <a href="#top">
                        <i class="el-icon-arrow-up"    style="font-size: 30px;color: #2774fd;margin-top:5px;"></i>
                        <a>回顶部</a>
                    </a>
               </li>
           </ul>
       </div>
        
   </div>
</template>

<script>
export default {
  name: 'App',
	data() {
		return{
            fullscreenLoading:false,
            ins:null,
            toolArr:[],//json
             scroll: '',
             src: 'http://wogeshi.lidongliang4444.cn/04tulingRobot/',
            bannerArr:[
                'http://5b0988e595225.cdn.sohucs.com/images/20180720/8bca9fad003a49f997dcdbcfdcba1f5b.gif',
                'http://5b0988e595225.cdn.sohucs.com/images/20180720/8bca9fad003a49f997dcdbcfdcba1f5b.gif',
                'http://pic80.nipic.com/file/20151014/21854933_174850826943_2.jpg',
                'http://pic34.nipic.com/20131105/14591546_145629603118_2.jpg'
            ],
            banner:'http://pic.qqtn.com/up/2015-8/2015081016243210505.png',
            search:'',
		//   clientHeight: '',  // 这里是给到了一个默认值 （这个很重要）
		}
	},
	methods: {
        active (num) {
            this.ins=num
            // console.log(num,'点了第几个')
        },
　　_isMobile() {
			let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
			return flag;
		},
		locationRouter(){
            if (this._isMobile()) {
                this.$router.replace('/h5');
            } else {
                this.$router.replace('/');
            }
        },
        bingSearch(){
            window.location.href='https://cn.bing.com/search?q='+this.search
            console.log('点击了搜索')
        },
        getToolJson () {
            this.$http.get('static/tool.json',{
            }).then(function(result) {
                this.fullscreenLoading = false;
                this.toolArr=result.data
                    // console.log(this.toolArr,'这是数据')
            }.bind(this))
        },
      handleScroll () {
        var scrollTop = document.body.scrollTop;
        if(scrollTop<117){
            this.ins=null
        }else if (scrollTop >= 117&&scrollTop<929) {
           this.ins=0
        }else if(scrollTop>=929&&scrollTop<1233){
            this.ins=1
        }else if(scrollTop>=1233&&scrollTop<1538){
            this.ins=2
        }else if(scrollTop>=1538){
            this.ins=3
        }
    }

	},
 mounted() {
     this.fullscreenLoading = true;
     window.addEventListener('scroll', this.handleScroll, true)
      this.locationRouter()
      this.getToolJson()
	  var that = this;
    window.onresize = function temp() {
			//  console.log('浏览器宽度')
			 that.locationRouter()
	};
  }
}

</script>
<style>
ul{
    list-style: none;
    padding: 0;
    margin: 0;
}
a,a:hover,a:active,a:visited,a:link,a:focus{
    -webkit-tap-highlight-color:rgba(0,0,0,0);
    -webkit-tap-highlight-color: transparent;
    outline:none;
    background: none;
    text-decoration: none;
}
::-moz-selection{background:#ff07f6;color: #fff;} 
::selection {
    background: #ff07f6;
	color: #fff;
}
html{
     width: 100%;
    height: 100%;
}
body{
    width: 100%;
    height: 100%;
    margin: 0;
    background-image: url(https://www.sqyai.com/zb_users/theme/brieflee/style/images/bg.png);
    background-color: #FBFBFB;
}
.baniframe{
  width: 100%;
  height: 100%;
}

.h5Content{
    margin-top: -85px;;
    padding: 2.7%;
    padding-bottom: 75px;
}
.logoLeft{
    text-align: left;
}
.logoImg{
width: 136px;
margin-bottom: 10px;
}
.headerSeach{
    width: 100%;
    margin: 0;
    display: flex;
}
.searchInput{
    width: 80%;
    margin: 0;
    border: none;
    border-radius: 0;
}
.searchInput input{
    border: 1px solid #2774fd;
    border-radius: 0;
    outline: none;
}
.searchInput input:hover{
    border: 1px solid #2774fd;
    border-radius: 0;
    outline: none;
}
.headerSeach .searchBtn,.headerSeach .searchBtn:focus{
    width: 20%;
    margin: 0;
    text-align: center;
    border:none;
    background: #2774fd;
    color: #fff;
    border-radius: 0;
    padding: 0;
}
.bannerBack{
    width: 100%;
    margin-top: 10px;
}
.bannerBack img{
    width: 100%;
    height: 150px;
}
.footer{
    width: 94.6%;
    margin-left: 2.7%;
    position: fixed;
    bottom: 0;
    left: 0;
}
.footer ul{
    /* width: 100%; */
    list-style: none;
    display: flex;
    padding: 0;
    margin: 0;
    background: #fff;

}
.footer ul li{
    width: 25%;
    height: 65px;
    /* line-height: 65px; */
    text-align: center;
    /* border: 1px solid #2774fd; */
}
.footer ul li.active{
    color: #2774fd;
}
.footer ul li.active a{
    color: #333;
}
.footer ul li i{
    display: inline-block;
    width: 100%;
    height: 35px;
}
.footer ul li a{
text-decoration: none;
color: #333;
}
.toolBack{
    background: #fff;
    text-align: left;
    padding:0 13px;
    margin-top: 15px;
    border: 1px solid #eee;
    box-shadow: 5px 5px  10px 0 rgba(0,0,0,0.06);
    border-radius: 5px;
}
.toolBack p{
    padding: 0;
    margin: 0;
    border-bottom: 1px dashed #eee;
}
.toolBack p i{
  margin-right: 13px;
  padding: 5px 0;
}
.toolList{
    text-align: left;
    background: #fff;
}
.toolList li{
    display: inline-block;
    width: 24.5%;
    height: 42px;
    line-height: 42px;
    text-align: center;
}
.toolList li a{
    color: #666;
}
iframe{
    width: 100%;
    height: 753px;
    border: none;
    }
   #chat .copy{
        font-size: 14px;
        text-align: center;
        /* margin-bottom: 15px; */
        border: none;
        margin-bottom: 35px;
}
</style>
