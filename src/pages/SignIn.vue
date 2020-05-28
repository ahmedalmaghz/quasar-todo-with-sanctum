<template>
<div v-if="!authed">
  <form action="#" @submit.prevent="submit">
    <div>
      <label for="email">Email address</label>
      <input type="text" name="email" id="email" v-model="form.email">
    </div>
    <div>
      <label for="password">Password</label>
      <input type="text" name="password" id="password" v-model="form.password">
    </div>
    <div>
      <button type="submit">
        Sign in
      </button>
    </div>
      </form>
</div>
<div v-else-if="authed"> welceom {{userName}}</div>
</template>

<script>
 // import axios from 'axios'
  import { mapActions } from 'vuex'

  export default {
    name: 'SignIn',

    data () {
      return {
        form: {
          email: '',
          password: '',
        },
        authed:false,
        userName:''
      }
    },

    methods: {
      ...mapActions({
        signIn: 'auth/signIn'
      }),

      async submit () {
      //  await this.$store.dispatch({type:'auth/signIn',amount:this.form});
       await this.signIn(this.form)
      this.authed=true;
   //  this.userName=this.$store.state.user.name;
        this.$router.replace({ name: 'home' })
      }
    }
  }
</script>