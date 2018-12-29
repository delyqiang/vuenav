<template>
     <div id="container">
       <iframe :src="src"></iframe>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      src: 'http://wogeshi.lidongliang4444.cn/04tulingRobot/',
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
        width: 100%;
        min-height: 650px;
        background: #fff;
      }
      #container iframe{
        width: 100%;
        height: 753px;
        border: none;
      }
</style>
