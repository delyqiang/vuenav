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
</style>
