<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h2>Essential Links</h2>
      <li v-for="index of list"><a :href="index.url" target="_blank" >{{index.name}}</a></li>
    <h2>{{ msg }}</h2>
    <myComponent></myComponent>
    <button @click="greet">Greet</button>
    <h1 :class="[activeClass, errorClass]">
      <router-link to="/">天意</router-link>
      <router-link to="/key/2">天涯</router-link>
      <router-link to="/bar/6">梦</router-link>
      <router-link to="/bar/8">痕迹</router-link>
      <router-link to="/see">看</router-link>
      <router-link to="/see/heaven">天空</router-link>
      <router-link to="/movie/12">电影</router-link>
      <transition>
          <router-view></router-view>
      </transition>
    </h1>
    <button  @keyup.enter="warns('天涯')">warns</button><br><br>
    <input type="checkbox" id="checkbox" v-model="checked">
    <label for="checkbox">{{ checked }}</label>
    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
    <label for="jack">Jack</label>
    <input type="checkbox" id="john" value="John" v-model="checkedNames">
    <label for="john">John</label>
    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
    <label for="mike">Mike</label>
    <br>
    <span>Checked names: {{ checkedNames }}</span>
    <br><br>
    <select v-model="selected">
      <option v-for="option in options" :value="option.value">
        {{ option.text }}
      </option>
    </select>
    <span>Selected: {{ selected }}</span>

    <br><br>
    <button @click="show = !show">
      Toggle
    </button>
    <transition name="fade">
      <p v-if="show">hello</p>
    </transition>
    <button @click="axioss">httpss</button>
    <!--<p v-for="x in datas">{{x}}</p>-->
    <br>  <br>
    <br>
    <br>
    <br>
    <br>
    <div v-for="data in datas">
      <span>{{ data }}</span>
    </div>
     <div id='jsonpDatas' v-for="datas in jsonpDatas">
         <img :src='datas.imgh_url' />
         <div class='title_actors'>
             <p class='titles'>{{ datas.title }}</p><br>
             <p class='actors'>
              主演：<span v-for="extRd in datas.extRd">
                      <span class='extRds'>{{ extRd.name }}</span> 
                    </span>
             </p>
         </div>
     </div>
    <br>
    <br>
    <br>
    <br>
  </div>
</template>

<script>
  import  myComponent from './myComponent.vue';
  import axios from 'axios';
  // import jsonp  from 'jsonp ';
  const jsonp = require('jsonp');

  export default {
    name: 'app',
    data () {
      return {
        list: [     
          { name:'Core Docs', url:'https://vuejs.org' },
          { name:'Forum', url:'https://forum.vuejs.org' },
          { name:'Gitter Chat', url:'https://gitter.im/vuejs/vue' },
          { name:'Twitter', url:'https://twitter.com/vuejs' }
        ],
        msg: 'Welcome to Your Vue.js App',
        activeClass: 'active',
        errorClass: 'text-danger',
        checked:false,
        checkedNames: [],
        selected: 'A',
        options: [
          { text: 'One', value: 'A' },
          { text: 'Two', value: 'B' },
          { text: 'Three', value: 'C' }
        ],
        show: true,
        datas: [],
        jsonpDatas:{}
      }
    },
    components:{
      myComponent
    },
    methods: {
      greet(event) {
        // `this` 在方法里指当前 Vue 实例
        alert('Hello ' + this.name + '!')
        // `event` 是原生 DOM 事件
        if (event) {
          alert(event.target.tagName);
        }
      },
      warns(message, event) {
        // 现在我们可以访问原生事件对象
        if (event) event.preventDefault()
        alert(message)
      },
      axioss() {
        axios.get('https://s3-us-west-2.amazonaws.com/s.cdpn.io/4621/html-elements.json',{}).
        then((function (res) {
          console.log(res.data);
          this.datas=res.data;
        }).bind(this)).
        catch(function(err) {
          console.log(err);
        })
      }
    },
    mounted(){
       jsonp('http://v.duba.com/commonapi/tvplay2level/', null, ((function (err, data) {
          if (data) {
              console.log(data);
              console.log(data.videoshow.videos);
               this.jsonpDatas=data.videoshow.videos;
            } else {
              console.error(err.message);
            }
            }).bind(this)));
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.active{
  color:red
}
.text-danger{font-size:50px;}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}

.router-link-active {
  color: red;
}
#jsonpDatas{
  text-align:left !important;
  display: flex;
  justify-content:left;
  margin: 20px auto;
  width:500px
  
}
.extRds{
  margin-right:10px;
}
.titles{
  margin-left:20px;
  
}
.actors{
  margin-left:50px
}
.title_actors{ display: flex;align-items: center}
</style>
