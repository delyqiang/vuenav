<template>
    <el-row >
        <el-col class="colRela" :xs="20" :sm="20" :md="17" :lg="14" :xl="14"  :offset='1'>
            <img src="./../../static/img/logo1.png" class="logo" alt="">
                <el-tabs type="border-card" v-model="tactiveName">
                    <el-tab-pane>
                         <span slot="label"><i class="el-icon-menu"></i> 主页</span>
                       <Home></Home>
                    </el-tab-pane>
                    <el-tab-pane>
                        <span slot="label"><i class="el-icon-date"></i> 工具</span>
                        <Tool></Tool>  
                    </el-tab-pane>
                    <el-tab-pane>
                         <span slot="label"><i class="el-icon-tickets"></i> 项目</span>
                        <Project></Project>
                    </el-tab-pane>
                    <el-tab-pane>
                         <span slot="label"><i class="el-icon-tickets"></i> 机器人</span>
                        <Robot></Robot>
                    </el-tab-pane>
                    <!-- <el-tab-pane name="second">
                          <span slot="label"><i class="el-icon-mobile-phone"></i> 资讯</span>
                        <Info></Info>   
                    </el-tab-pane> -->
                </el-tabs>
        </el-col>
        <el-col  :xs="20" :sm="8" :md="4" :lg="4" :xl="4" class="rightInfo">
            <!-- <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>推荐资讯</span>
                </div>
                <div class="text item infoPage" @click="infoPage()">
                    每日最新资讯
                </div>
                </el-card> -->
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>QQ群：564029328</span>
                </div>
                <div class="text item infoPage">
                    <a  target="_blank" href="http://qm.qq.com/cgi-bin/qm/qr?k=_L5dAL0F86CYxC12Vsu0J8_wodMLOP8x">
                        <img data-v-61f05754="" border="0" src="http://pub.idqqimg.com/wpa/images/group.png" alt="QQ群" title="QQ群">
                    </a>
                </div>
                </el-card>
            <el-card class="box-card group">
                <div slot="header" class="clearfix">
                    <span>微信公众号</span>
                </div>
                <div class="text item infoPage">
                      <img src="./../../static/img/wechart.jpg" class="wechart" alt="公众号: 学前端呢" title="公众号: 学前端呢">
                      <p class="wechatDetals">扫码关注不迷路</p>
                </div>
                </el-card>
            <el-card class="box-card advertisement">
                 <img src="./../../static/img/Advertisement.gif" class="adImg" alt="邮箱联系:dailiqiang_6@163.com" title="邮箱联系:dailiqiang_6@163.com">
                </el-card>
                <!-- <button type="button" class="back-top small" @click="backTop()" v-show="backTopShow">我要上天</button> -->
               <img src="./../../static/img/top.png"  class="back-top small" @click="backTop()" v-show="backTopShow" alt="去顶部" title="去顶部">
        </el-col>
        <el-col  :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="rightInfo">
           <footer class="bg-color">
                <div class="info">
                    <div >
                    DeLyQiang Web Navigation
                    </div> 
                    <div>
                    前端技术导航，关注前端动态，分享、交流、保持友善。
                    </div> 
                    <div class="mHide">欢迎关注公众号: 学前端呢 </div>
                    <div class="mHide">
                    <a>DeLyQiang</a>　　　&copy;2018 DeLyQiang Web Navigation v1.0 
                    </div>
                    <div class="mHide">
                        <a href="mailto:dailiqiang_6@163.com">
                    商业合作联系邮箱: dailiqiang_6@163.com
                        </a>
                    </div>
                </div> 
                <!-- <div class="infoLink">
                    <div>
                    友情链接
                    </div> 
                    <div>
                    <a target="_blank" href="https://reactjs.org/">Reactjs</a>
                    </div> 
                    <div>
                    <a target="_blank" href="https://cn.vuejs.org/v2/guide/">VUE2.0</a>
                    </div>
                </div> -->
                <div class="info">
                    <div>
                        微信公众号
                    </div>
                    <div>
                         <img src="./../../static/img/wechart.jpg" class="wechart" alt="扫码关注不迷路,公众号:学前端呢" title="扫码关注不迷路,公众号:学前端呢">
                    </div> 
                </div>
                </footer>
        </el-col>
    </el-row>
</template>

<script>
import Info from './info'
import Tool from './tool'
import Home from './home'
import Project from './project'
import Robot from './robot'
export default {
   components: { Info,Tool ,Home,Project,Robot},
  data () {
    return {
     tactiveName:'',
     backTopShow:false
    }
  },
   mounted() {
      window.addEventListener('scroll', this.handleScroll)
    },
   methods: {
      infoPage(){
          this.tactiveName= 'second'
      },
      backTop() {
        let back = setInterval(() => {
          if(document.body.scrollTop||document.documentElement.scrollTop){
            document.body.scrollTop-=100;
            document.documentElement.scrollTop-=100;
          }else {
            clearInterval(back)
          }
        });
      },
      handleScroll(){
        if (document.documentElement.scrollTop + document.body.scrollTop > 100) {
          this.backTopShow=true;
        }
        else {
          this.backTopShow=false;
        }
      },
　　_isMobile() {
			let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
			return flag;
		},
		locationRouter(){
            if (this._isMobile()) {
                // alert("手机端");
                this.$router.replace('/h5');
            } else {
                // alert("pc端");
                this.$router.replace('/');
            }
		}
    },
    mounted() {
	  this.locationRouter()
	    var that = this;
        window.onresize = function temp() {
        that.locationRouter()
	};
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.background{
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
}
.el-tabs__nav-scroll {
    overflow: hidden;
    background-color: #689eff !important;
}
.el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active {
    color: #689eff !important;
      font-weight: bold;
}
.el-tabs--border-card>.el-tabs__header .el-tabs__item {
    color: #fff !important;
}
.el-tabs--border-card>.el-tabs__header .el-tabs__item:not(.is-disabled):hover {
    color: #fff !important;
}
.el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active:hover {
    color: #689eff !important;
}
.el-card__header {
    padding: 9px 20px;
    border-bottom: 1px solid #ebeef5;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    background: #689eff;
    color:#fff;
    font-size: 14px;
}
.el-card__body{
    color: #689eff;
    font-size: 14px;
    padding: 9px 20px;
}
.rightInfo{
    margin-left: 15px;
}
.el-row{
    display: flex;
        flex-direction: row;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 100%;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
}
.infoPage{
    cursor: pointer;
}
.colRela{
    position: relative;
    margin-bottom: 145px;
}
.logo{
    position: absolute;
    top: -66px;
    left: 13px;
    width: 136px;
    -webkit-transition: all 1.6s;
    transition: all 1.6s;
    -webkit-transition: all 1.6s cubic-bezier(0.17, 0.67, 0.62, 1.22);
    -moz-transition: all 1.6s cubic-bezier(0.17, 0.67, 0.62, 1.22);
    -o-transition: all 1.6s cubic-bezier(0.17, 0.67, 0.62, 1.22);
    -ms-transition: all 1.6s cubic-bezier(0.17, 0.67, 0.62, 1.22);
}


.logo:hover {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
}
.group{
    margin-top: 20px;
}
.wechart{
    width: 60%;
}
.wechatDetals{
    margin: 0;
}
.advertisement{
    margin-top: 20px;
    cursor: pointer;
}
.advertisement .el-card__body{
    padding: 0;
}
.adImg{
   width: 100%;
}
.back-top {
    position: fixed;
    right: 15%;
    bottom: 150px;
    width: 85px;
    opacity: .5;
    cursor: pointer;
  }
  footer {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 120px;
  color: #fff;
  padding-top: 10px;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-direction: row;
          flex-direction: row;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;  
  -ms-flex-wrap: wrap;  
      flex-wrap: wrap;
}
footer a {
  color: #fff;
}
footer .info {
  width: 35%;
  text-align:left;
  font-size: 12px;
  line-height:20px;
}
footer .infoLink{
  width: 300px;
  text-align:left;
  font-size: 12px;
  line-height:20px;
}
.bg-color {
  background-color: #689eff;
}
.info .wechart{
    width: 80px;
}
@media screen and (max-width:992px) {
  .colRela {
        margin-bottom: 15px;
    }
    .rightInfo {
        margin-bottom: 70px;
    }
    .mHide{
        display: none;
    }
}
</style>
