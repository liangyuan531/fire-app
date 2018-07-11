<template>
  <div>
    <ul>
      <li id="vouchers" v-for="(item, idx) in items" :key="idx">
        <a @click="goPay">
          <img :src="item.url">
          xx
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { db } from '../main'
export default {
  name: 'Voucher',
  data () {
    return {
      items: [],
      title: '',
      image: '',
      price: '',
      quantity: ''
    }
  },
  // firestore () {
  //   return {
  //     items: db.collection('items')
  //   }
  // },
  created () {
    db.collection('items').get().then(
      (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          let data = {
            'price': doc.data().price,
            'quantity': doc.data().quantity,
            'title': doc.data().title,
            'url': doc.data().url
          }
          this.items.push(data)
        })
      })
  },
  methods: {
    goPay: function () {
      this.$router.push({path: '/payment'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#vouchers li{
   float:left;
}
ul {
  list-style-type: none;
  padding: 0;
}
a {
  color: #42b983;
}
input, button {
  margin-bottom: 10px;
}
</style>
