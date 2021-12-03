<template>
  <div>
    <head>
      <meta charset="utf-8">
      <title>Socket.IO chat</title>
      <link rel="stylesheet" href="public/css/global.css">
    </head>

    <header>

      <div>
        <h1>NodeJS Chat</h1>
      </div>
      <div id="accountDiv">
        <button id="loginButton" @click="goLogin">Se connecter</button> <button id="logoutButton" @click="disconnect">Déconnexion</button>
      </div>

    </header>
  </div>
</template>

<script>
export default {
  name: "header",
  methods:{
    goLogin(){
      this.$router.push('/')
    },
    disconnect(){
      this.$session.destroy()
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>

body {
  margin: 0;
  padding-bottom: 3rem;
  font-family: -apple-system,
  BlinkMacSystemFont, "Segoe UI",
  Roboto, Helvetica, Arial, sans-serif;
}

header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2%;
  background-color: antiquewhite;
}

#accountDiv{
  display: flex;
  flex-direction: row;
  justify-content: end;
  width: 50%;
  align-items: center;
}

header button{
  height: 50%;
}

button {
  padding: 1%;
  background-color: #3b444b;
  border: none;
  border-radius: 5px;
  color: #efefef;
  font-size: 1.3em;
}

button:hover {
  background-color: #2b3238;
}

#logoutButton{
  display: none;
}

</style>