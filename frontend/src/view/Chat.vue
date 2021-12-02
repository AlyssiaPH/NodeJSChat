<template>
  <div>
    <custom_header></custom_header>

    <div id="menu">

      <div id="chatList">
        <div v-for="room in data.room_list" :key="room" class="divRoomTab">
          <p v-if="room=== data.current_room" class="currentRoomTab roomTab" @click="changeRoom(room)">{{room}}</p>
          <p class="roomTab" v-else @click="changeRoom(room)">{{room}}</p>
        </div>
      </div>

      <div id="changeNameMenu">
        <label for="pseudoInput">Pseudo</label>
        <input type="text" id="pseudoInput" v-model="data.newPseudo">
        <input type="submit" value="Changer" @click="changeUserName">
      </div>

    </div>

    <ul id="messages" v-for="item in data.messages_list" :key="item.content">

      <li v-if="data.user.email === item.iduser " class="messageYou">
        <p>{{ item.content }}</p>
        <p v-if="data.user.admin === true" @click="deleteMessage(item.id)">x</p>
      </li>
      <li v-else class="messageOther">
        <p>{{ item.nameUser }} : {{ item.content }}</p>
        <p v-if="data.user.admin === true" @click="deleteMessage(item.id)">x</p>
      </li>

    </ul>
    <div id="form">
      <input id="input" autocomplete="off"  v-model="data.newMessage"/>
      <button @click="sendMessage">Envoyer</button>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";

export default {
  name: "chat",
  data() {
    return {
      data: {
        user:{
          email:"idtoto",
          name:"Toto",
          admin:true
        },
        newPseudo:"",
        newMessage:"",
        current_room: "General",
        room_list: ["General", "Test", "Games"],
        messages_list: [
          {
            id:"4",
            iduser: 'idtoto',
            nameUser: 'Toto',
            content: 'hello les gens '
          }, {
            id:"4",
            iduser: 'idbernard',
            nameUser: 'Bernard',
            content: 'Coucoous '
          }, {
            id:"4",
            iduser: 'idpatrick',
            nameUser: 'Patrick',
            content: 'hellows '
          }, {
            id:"4",
            iduser: 'idtoto',
            nameUser: 'Toto',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a nulla a massa interdum imperdiet sed nec nibh. Proin porttitor euismod nulla ut interdum. Cras elementum placerat aliquam.'
          },
        ],
        message_content: null
      },
      info: null
    }
  },
  components: {
    'custom_header': Header
  },
  methods:{
    deleteMessage(id){
      console.log("Suprression message : " + id)
    },
    changeRoom(id){
      console.log("Changement de room : " + id)
    },
    changeUserName(){
      let userMAil = this.data.user.email
      let newPseudo = this.data.newPseudo
      console.log("Changement pseudo de : " +userMAil + " vers : " + newPseudo)
    },
    sendMessage(){
      let userMAil = this.data.user.email
      let newMessage = this.data.newMessage
      console.log("Message de : " +userMAil + " : " + newMessage)
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

#chatList{
  display: flex;
  flex-direction: row;
}

.divRoomTab{
  padding-right: 1%;
  padding-left: 1%;
}

.roomTab{
  /*background-color: aliceblue;*/
}

.currentRoomTab{
  /*background-color: antiquewhite;*/
  text-decoration: underline #3b444b;
}

#menu{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: solid 2px antiquewhite;
  padding: 1%;
}

#changeNameMenu{
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap ;
  align-items: center;
  justify-content: space-between;
  width: 40%;
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

#messages {
  list-style-type: none;
  margin: 0;
  padding: 0;

}

#messages > li {
  display: flex;
  padding: 0.5rem;
}

.messageYou {
  display: flex;
  flex-direction: row;
  justify-content: end;
  flex-wrap: nowrap;
  margin-left: 30%;
}

.messageYou p {
  background-color: antiquewhite;
  padding: 1%;
  border-radius: 5px;
  flex-wrap: wrap;
}

.messageOther{
  margin-right: 30%;
}

.messageOther p {
  width: max-content;
  background-color: aliceblue;
  padding: 1%;
  border-radius: 5px;
  flex-wrap: wrap;
}

input[type=submit] {
  padding: 1%;
  background-color: #3b444b;
  border: none;
  border-radius: 5px;
  color: #efefef;
  font-size: 1.3em;
}

#form {
  display: flex;
  background: rgba(0, 0, 0, 0.15);
  padding: 0.25rem;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3rem;
  box-sizing: border-box;
  backdrop-filter: blur(10px);
}

#input {
  border: none;
  padding: 0 1rem;
  flex-grow: 1;
  border-radius: 2rem;
  margin: 0.25rem;
}

#input:focus {
  outline: none;
}

/*#messages > li:nth-child(odd) { background: #efefef; }*/

</style>