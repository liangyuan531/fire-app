<template>
  <div id="app" class="content">
    <img src="https://www.handyhippo.co.uk/media/catalog/product/cache/1/image/300x300/9df78eab33525d08d6e5fb8d27136e95/f/o/fotolia_58257927_s-gift-voucher/Gift-Voucher-gift-voucher-30.jpg">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px 10vw;
}
</style>
