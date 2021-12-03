<template>
  <div>
    <custom_header></custom_header>

    <div id="menu">

      <div id="chatList">
        <div v-for="room in data.room_list" :key="room.name" class="divRoomTab">
          <p v-if="room._id=== data.current_room" class="currentRoomTab roomTab" @click="changeRoom(room._id)">{{room.name}}</p>
          <p class="roomTab" v-else @click="changeRoom(room._id)">{{room.name}}</p>
        </div>
      </div>

      <div id="changeNameMenu">
        <label for="pseudoInput">Pseudo</label>
        <input type="text" id="pseudoInput" v-model="data.newPseudo">
        <input type="submit" value="Changer" @click="changeUserName">
      </div>

    </div>

    <ul id="messages" v-for="item in data.messages_list" :key="item._id">

      <li v-if="data.user.email === item.iduser " class="messageYou">
        <p>{{ item.content }}</p>
        <p v-if="data.user.admin === true" @click="deleteMessage(item.id)">x</p>
      </li>
      <li v-else class="messageOther">
        <p>{{ item.content }}</p>
        <p v-if="data.user.admin === true" @click="deleteMessage(item.id)">x</p>
      </li>

    </ul>
    <div id="form">
      <input id="input" autocomplete="off"  v-model="data.new_message"/>
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
        current_room: "61a9259a4242a4486eab216f",
        new_message: "",
        room_list: this.getAllRooms(),
        messages_list: [],
        message_content: null
      },
      info: null
    }
  },
  components: {
    'custom_header': Header
  },
  methods:{
    async getAllRoomMessages(idRoom){
      this.data.messages_list = ""
      await this.$http.get('http://localhost:3000/allroommessages',
          { params: {
            idRoom: idRoom
            }}).then(async (res) => {
        this.data.messages_list = res.data.result
        return res.data.result
      }).catch(err => {
        console.log(err)
      })
    },
    deleteMessage(id){
      console.log("Suprression message : " + id)
    },
    changeRoom(id){
      this.data.current_room = id
      this.getAllRoomMessages(id)
    },
    changeUserName(){
      let userMAil = this.data.user.email
      let newPseudo = this.data.newPseudo
      console.log("Changement pseudo de : " +userMAil + " vers : " + newPseudo)
    },
    async sendMessage(){
      console.log(this.data.new_message)
      let messageData = {
        content: this.data.new_message,
        iduser: this.data.user.email,
        idroom: this.data.current_room
      }
      console.log(messageData)
      await this.$http.post('http://localhost:3000/message', messageData).then((res) => {
        //this.data.new_message= ""
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    },
    async getAllRooms() {
      await this.$http.get('http://localhost:3000/allrooms',
          { }).then((res) => {
        this.data.room_list = res.data.result
        return res.data.result
      }).catch(err => {
        console.log(err)
      })
    },
    async getuser(id) {
      await this.$http.get('http://localhost:3000/user',
          { params: {
              id: id
            }}).then((res) => {
        console.log(res.data.result)
        return res.data.result
      }).catch(err => {
        console.log(err)
      })
    },
  },
  mounted() {
    this.changeRoom(this.data.current_room)
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
  display: flex;
  margin-right: 1%;
  margin-left: 1%;
  flex-wrap: nowrap;
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