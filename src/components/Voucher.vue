<template>
  <div>
    <ul>
      <li v-for="(item, idx) in items" :key="idx">
        <button>
          <img :src="item.url">
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { db } from '../main'
export default {
  name: 'HelloWorld',
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
input, button {
  margin-bottom: 10px;
}
</style>
