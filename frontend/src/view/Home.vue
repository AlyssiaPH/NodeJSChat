<template>
  <div>
    <custom_header></custom_header>
    <div class="position-absolute start-50 translate-middle" style="width: 20%;height: 20%;top:25%;">
      <div class="card text-center">
        <div class="card-header">
          <h5>Welcome to the chat Coding</h5>
        </div>
        <div class="card-body">
          <div>
            <div class="mb-3">
              <label for="exampleDropdownFormEmail2" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleDropdownFormEmail2" v-model="data.email" placeholder="email@example.com">
            </div>
            <div class="mb-3">
              <label for="exampleDropdownFormPassword2" class="form-label">Password</label>
              <input type="password" class="form-control" id="exampleDropdownFormPassword2" v-model="data.password" placeholder="Password">
            </div>
            <button type="submit" class="btn btn-primary" @click="sendUserData">Sign in</button>
          </div>
        </div>
        <div class="card-footer text-muted">
          <button type="submit" class="btn btn-secondary" @click="inscription">Sign up</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

import Header from "../components/Header";
import VueSession from 'vue-session'
import Vue from "vue";
Vue.use(VueSession)

export default {
  name: "Home",
  data() {
    return {
      data: {
        email: null,
        password:null
      },
      info: null
    }
  },
  methods: {
    inscription(){
      this.$router.push('/inscription')
    },
    async sendUserData() {
      await this.$http.post('http://localhost:3000/login', this.data).then((res) => {
        console.log(res.data.result)
        if (res.data.result !== null) {
          this.$session.start()
          this.$session.set('user', res.data.result)
          this.$router.push('/chat')
        }
      })
          .catch(err => {
            console.log(err)
          })
    }
  },
  mounted() {
  },
  components: {
    'custom_header': Header
  }
}
</script>

<style scoped>

</style>