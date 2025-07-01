<template>
  <HeaderComp />

  <router-view></router-view>
</template>

<script>
import HeaderComp from './components/sections/HeaderComp.vue'

export default {
  name: 'App',
  components : {
    HeaderComp
  }
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
