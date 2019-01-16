<template>
  <div id="app">
    <div class="background">
            <!-- <iframe class="baniframe" sandbox="allow-scripts allow-same-origin" id="mh" src="http://www.jq22.com/js/a3.html"></iframe> -->
            <!-- <iframe class="baniframe" sandbox="allow-scripts allow-same-origin" id="mh" src="http://wogeshi.lidongliang4444.cn/sh/sh.html"></iframe> -->
        </div>
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body{
    margin: 0;
    background-image: url(https://www.sqyai.com/zb_users/theme/brieflee/style/images/bg.png);
    background-color: #FBFBFB;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top:85px;
}
.baniframe{
  width: 100%;
  height: 100%;
}

#app::-webkit-scrollbar{/*滚动条整体部分，其中的属性有width,height,background,border等（就和一个块级元素一样）（位置1）*/
			width:3px;
			height:10px;
	}
	/* #app::-webkit-scrollbar-button{/*滚动条两端的按钮，可以用display:none让其不显示，也可以添加背景图片，颜色改变显示效果（位置2）*/
			/* background:#74D334;
	} */
	#app::-webkit-scrollbar-track{/*外层轨道，可以用display:none让其不显示，也可以添加背景图片，颜色改变显示效果（位置3）*/
			background:#fff;
	}
	#app::-webkit-scrollbar-track-piece{/*内层轨道，滚动条中间部分（位置4）*/
			background:#fff;
	}
	#app::-webkit-scrollbar-thumb{/*滚动条里面可以拖动的那部分（位置5）*/
		background:#FFA711;
		border-radius:4px;
	}
	#app::-webkit-scrollbar-corner {/*边角（位置6）*/
		background:#82AFFF; 
	}
	#app::-webkit-scrollbar-resizer  {/*定义右下角拖动块的样式（位置7）*/
		background:#FF0BEE;
	}


body::-webkit-scrollbar{/*滚动条整体部分，其中的属性有width,height,background,border等（就和一个块级元素一样）（位置1）*/
			width:5px;
			height:10px;
	}
	/* body::-webkit-scrollbar-button{/*滚动条两端的按钮，可以用display:none让其不显示，也可以添加背景图片，颜色改变显示效果（位置2）*/
			/* background:#74D334;
	} */
	body::-webkit-scrollbar-track{/*外层轨道，可以用display:none让其不显示，也可以添加背景图片，颜色改变显示效果（位置3）*/
			background:#fff;
	}
	body::-webkit-scrollbar-track-piece{/*内层轨道，滚动条中间部分（位置4）*/
			background:#fff;
	}
	body::-webkit-scrollbar-thumb{/*滚动条里面可以拖动的那部分（位置5）*/
		background:#FFA711;
		border-radius:4px;
	}
	body::-webkit-scrollbar-corner {/*边角（位置6）*/
		background:#82AFFF; 
	}
	body::-webkit-scrollbar-resizer  {/*定义右下角拖动块的样式（位置7）*/
		background:#FF0BEE;
	}



html::-webkit-scrollbar{/*滚动条整体部分，其中的属性有width,height,background,border等（就和一个块级元素一样）（位置1）*/
			width:5px;
			height:10px;
	}
	/* html::-webkit-scrollbar-button{/*滚动条两端的按钮，可以用display:none让其不显示，也可以添加背景图片，颜色改变显示效果（位置2）*/
			/* background:#74D334;
	} */
	html::-webkit-scrollbar-track{/*外层轨道，可以用display:none让其不显示，也可以添加背景图片，颜色改变显示效果（位置3）*/
			background:#fff;
	}
	html::-webkit-scrollbar-track-piece{/*内层轨道，滚动条中间部分（位置4）*/
			background:#fff;
	}
	html::-webkit-scrollbar-thumb{/*滚动条里面可以拖动的那部分（位置5）*/
		background:#FFA711;
		border-radius:4px;
	}
	html::-webkit-scrollbar-corner {/*边角（位置6）*/
		background:#82AFFF; 
	}
	html::-webkit-scrollbar-resizer  {/*定义右下角拖动块的样式（位置7）*/
		background:#FF0BEE;
	}
</style>
