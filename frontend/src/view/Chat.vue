<template>
  <div>
    <custom_header></custom_header>

    <div id="menu">

      <div id="chatList">
        <div v-for="room in data.room_list" :key="room" class="divRoomTab">
          <p v-if="room=== data.current_room" class="currentRoomTab roomTab">{{room}}</p>
          <p class="roomTab" v-else>{{room}}</p>
        </div>
      </div>

      <div id="changeNameMenu">
        <label for="pseudoInput">Pseudo</label>
        <input type="text" id="pseudoInput">
        <input type="submit" value="Changer">
      </div>

    </div>

    <ul id="messages" v-for="item in data.messages_list" :key="item.content">

      <li v-if="data.user.email === item.iduser " class="messageYou">
        <p>{{ item.content }}</p>
        <p v-if="data.user.admin === true">x</p>
      </li>
      <li v-else class="messageOther">
        <p>{{ item.nameUser }} : {{ item.content }}</p>
        <p v-if="data.user.admin === true">x</p>
      </li>

    </ul>
    <form id="form" action="">
      <input id="input" autocomplete="off"/>
      <button>Envoyer</button>
    </form>
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
        current_room: "General",
        room_list: ["General", "Test", "Games"],
        messages_list: [
          {
            iduser: 'idtoto',
            nameUser: 'Toto',
            content: 'hello les gens '
          }, {
            iduser: 'idbernard',
            nameUser: 'Bernard',
            content: 'Coucoous '
          }, {
            iduser: 'idpatrick',
            nameUser: 'Patrick',
            content: 'hellows '
          }, {
            iduser: 'idtoto',
            nameUser: 'Toto',
            content: 'User1 : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a nulla a massa interdum imperdiet sed nec nibh. Proin porttitor euismod nulla ut interdum. Cras elementum placerat aliquam.'
          },
        ],
        message_content: null
      },
      info: null
    }
  },
  components: {
    'custom_header': Header
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
}

.messageYou p {
  background-color: antiquewhite;
  padding: 1%;
  border-radius: 5px;
  flex-wrap: wrap;
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