<template>
  <div>
    <form @submit="pay(nameOnCard, cardNo, pwd, ccv)">
        <input v-model="nameOnCard" placeholder="name on card" class="input">
        <input v-model="cardNo" placeholder="card number" class="input">
        <input v-model="pwd" placeholder="password" class="input">
        <input v-model="ccv" placeholder="ccv" class="input">
        <button type="submit" class="button is-success">comfirm</button>
    </form>
  </div>
</template>

<script>
// import { db } from '../main'
export default {
  name: 'Voucher',
  methods: {
    pay: function (nameOnCard, cardNo, pwd, ccv) {

    }
  }
}
</script>

<style scoped>
input, button {
  margin-bottom: 10px;
}
</style>
