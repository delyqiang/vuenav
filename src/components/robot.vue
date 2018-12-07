<template>
     <div id="container">
        <div class="header">
            <span style="float: left;">黑聊,专注于舒缓情绪</span>
            <span style="float: right;">今天</span>
        </div>
        <ul class="content">
            <!-- 如果boy -->
            <li v-for="(item, index) in messageList" :key="index">
                <img :src="item.isBoy?'./static/img/162.png':'./static/img/162.png'" :class="item.isBoy?'imgright':'imgleft'" /><span
                    :class="item.isBoy?'spanright':'spanleft'">{{
                    item.message
                    }}</span>
            </li>
            <!-- 如果女 -->
            <!--
          <li>
            <img src="./img/girl.png" class="imgleft" /><span class="spanleft"
              >好你个鬼</span
            >
          </li>
        -->
        </ul>
        <div class="footer">
            <div id="user_face_icon"><img src="lib/boy.jpg" alt="" /></div>
            <input v-model.trim="message" id="text" type="text" @keyup.enter="send" placeholder="说点什么吧..." />
            <span @click="send" id="btn">发送</span>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      toolArr:[],//资讯
      input:'',
        // 聊天数组
        messageList: [],
        // 输入的聊天内容
        message: ""
    }
  },
    methods: {
        send() {
            if (this.message == "") {
                alert("写点东西嘛 (* ￣3)(ε￣ *)");
                return;
            }
            // 获取输入的内容
            // 添加到数组中
            this.messageList.push({
                message: this.message,
                // 标记当前这条数据处理是男的 还是女的 发送的
                isBoy: true
            });
            this.$http.post('http://www.tuling123.com/openapi/api',{
                'key': '79d56b3dcb2843c5a73deb42b458aeaa',
                ' info':this.message
            }).then(function(result) {
                console.log(result.data.text)
                this.messageList.push({
                    isBoy: false,
                    message: result.data.text
                });
                setTimeout(() => {
                    // 虽然Vue不建议操纵dom元素但是Vue原生搞不定的时候还是可以操纵dom的
                    $('.content').scrollTop(9999999999);
                }, 10);
            }.bind(this))
            // 清空
            this.message = "";
        },
  },
  created() {
    }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 * {
        margin: 0;
        padding: 0;
        list-style: none;
        font-family: "微软雅黑";
      }
      body {
        overflow: hidden;
      }
      #container {
        width: 450px;
        height: 780px;
        background: #eee;
        margin: 20px auto 0;
        position: relative;
        box-shadow: 20px 20px 55px #777;
      }
      .header {
        background: #000;
        height: 40px;
        color: #fff;
        line-height: 34px;
        font-size: 20px;
        padding: 0 10px;
      }
      .footer {
        width: 430px;
        height: 50px;
        background: #666;
        position: absolute;
        bottom: 0;
        padding: 10px;
      }
      .footer input {
        width: 275px;
        height: 45px;
        outline: none;
        font-size: 20px;
        text-indent: 10px;
        position: absolute;
        border-radius: 6px;
        right: 80px;
      }
      .footer span {
        display: inline-block;
        width: 62px;
        height: 48px;
        background: #ccc;
        font-weight: 900;
        line-height: 45px;
        cursor: pointer;
        text-align: center;
        position: absolute;
        right: 10px;
        border-radius: 6px;
      }
      .footer span:hover {
        color: #fff;
        background: #999;
      }
      #user_face_icon {
        display: inline-block;
        /* background: red; */
        width: 60px;
        height: 60px;
        border-radius: 30px;
        position: absolute;
        bottom: 6px;
        left: 14px;
        cursor: pointer;
        overflow: hidden;
      }
      img {
        width: 60px;
        height: 60px;
      }
      .content {
        font-size: 20px;
        width: 435px;
        height: 662px;
        overflow: auto;
        padding: 5px;
      }
      .content li {
        margin-top: 10px;
        padding-left: 10px;
        width: 412px;
        display: block;
        clear: both;
        overflow: hidden;
      }
      .content li img {
        float: left;
      }
      .content li span {
        background: #7cfc00;
        padding: 10px;
        border-radius: 10px;
        float: left;
        margin: 6px 10px 0 10px;
        max-width: 310px;
        border: 1px solid #ccc;
        box-shadow: 0 0 3px #ccc;
      }
      .content li img.imgleft {
        float: left;
      }
      .content li img.imgright {
        float: right;
      }
      .content li span.spanleft {
        float: left;
        background: #fff;
      }
      .content li span.spanright {
        float: right;
        background: #7cfc00;
      }
</style>
