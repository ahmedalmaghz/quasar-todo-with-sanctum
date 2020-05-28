<template>
  <q-page class="q-pa-lg">
    <h5 class="q-mt-none">Help</h5>
    <p>The QList and QItem are a group of components which can work together to present multiple line items vertically
      as a single continuous element. They are </p>
    <p>The QList and QItem are a group of components which can work together to present multiple line items vertically
      as a single continuous element. They are </p>
      <q-btn @click="getUser" title="get user" />
  </q-page>
</template>

<script>
import {axiosInstance} from 'boot/axios'
// import axios from 'axios'
//   import { mapActions } from 'vuex'
  export default {

    methods:{
      getUser(){
          axiosInstance.get('/api/user').then((response) => console.log(response.data))
      }
    }

  }
</script>
