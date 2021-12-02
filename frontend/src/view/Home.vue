<template>
  <div>
    <div class="position-absolute start-50 translate-middle" style="width: 20%;height: 20%;top:25%;">
      <div class="card text-center">
        <div class="card-header">
          <h5>Welcom to the chat Coding</h5>
        </div>
        <div class="card-body">
          <form>
            <div class="mb-3">
              <label for="exampleDropdownFormEmail2" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleDropdownFormEmail2" v-model="data.email" placeholder="email@example.com">
            </div>
            <div class="mb-3">
              <label for="exampleDropdownFormPassword2" class="form-label">Password</label>
              <input type="password" class="form-control" id="exampleDropdownFormPassword2" v-model="data.password" placeholder="Password">
            </div>
            <button type="submit" class="btn btn-primary" @click="sendUserData">Sign in</button>
          </form>
        </div>
        <div class="card-footer text-muted">
          <button type="submit" class="btn btn-secondary" @click="inscription">Sign up</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

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
    sendUserData() {
      this.$http({
        method: 'post',
        url: 'http://localhost:3000/login',
        headers: {'Content-Type' : 'application/json'},
        body: this.data
      }).then((res) => {
        console.log(res)
      })
          .catch(err => {
            console.log(err)
          })
    }
  },
  mounted() {
    this.sendUserData()
  }
}
</script>

<style scoped>

</style>