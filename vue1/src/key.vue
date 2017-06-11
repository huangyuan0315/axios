<template>
  <p  id="p1">{{Tracess}}{{$route.params.num}}</p>
</template>
<script>
  // import Vue from 'vue'
  // import VueRouter from 'vue-router'
  // import router from './js/router'
  export default {
    name: 'p1',
    data () {
      return {
        Tracess:'Tianya-天涯'
      }
    },
    mounted(){
      console.log(this.$route.params.num) 
    }
  }
</script>
