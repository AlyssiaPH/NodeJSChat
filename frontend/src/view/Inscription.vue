<template>
  <div>
    <div class="position-absolute start-50 translate-middle" style="width: 20%;height: 20%;top:25%;">
      <div class="card text-center">
        <div class="card-header">
          <h5>Welcom to the chat Coding inscription</h5>
        </div>
        <div class="card-body">
          <form>
            <div class="mb-3">
              <label for="exampleDropdownFormName" class="form-label">
                Your Name
              </label>
              <input  class="form-control" id="exampleDropdownFormName" v-model="data.name"
                      placeholder="Name">
            </div>
            <div class="mb-3">
              <label for="exampleDropdownFormEmailError" class="form-label" >
                Your Email address
              </label>
              <input type="email" v-if="error" class="form-control is-invalid" id="exampleDropdownFormEmailError" v-model="data.email"
                     placeholder="email@example.com">
            </div>
            <div class="mb-3">
              <label for="exampleDropdownFormEmailNoError" class="form-label" >
                Your Email address
              </label>
              <input type="email" v-if="!error" class="form-control" id="exampleDropdownFormEmailNoError" v-model="data.email"
                     placeholder="email@example.com">
            </div>
            <div class="mb-3">
              <label for="exampleDropdownFormPassword2" class="form-label">
                Your Password
              </label>
              <input type="password" class="form-control" id="exampleDropdownFormPassword2" v-model="data.password"
                     placeholder="Password">
            </div>
            <button type="submit" class="btn btn-primary" @click="sendUserData">create</button>

            <button type="submit" class="btn btn-primary" @click="getIfUserMailExist">get</button>
          </form>
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
        password: null,
        name: null,
        admin: false
      },
      error : false,
      info: null
    }
  },
  methods: {
    async getIfUserMailExist() {
      await this.$http.get('http://localhost:3000/inscription',
          { params: this.data }).then((res) => {
        this.info = res.data
      }).catch(err => {
        console.log(err)
      })
    },
    async sendUserData() {
      await this.$http.post('http://localhost:3000/inscription', this.data).then((res) => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    },
  },
  watch : {
    info: {
      handler: function (val) {
        // Return the object that changed
        if(val.connect === 'error'){
          this.error = true
        }
      },
      deep: true
    }
  }
}
</script>

<style scoped>

</style>