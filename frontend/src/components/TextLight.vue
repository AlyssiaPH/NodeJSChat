<template>
  <div>
    <ul>
      <li v-for="(data,index) in this.allLettes" :key="index">
        {{data}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TextLight",
  data (){
    return {
      allLettes : []
    }
  },
  props : {
    text : {
      type : Object,
      require :true
    },
    color : {
      type : String,
      require: true
    }
  },
  created() {
    this.createAllLetters()
  },
  methods : {
    createAllLetters(){
      this.allLettes ='N-o-t-F-o-u-n-d'.split('-')
    }
  }
}
</script>

<style scoped>

ul {
  margin: 0;
  padding: 0;
  display: flex;
}

ul li {
  list-style: none;
  color : #0195A3;
  font-size: 80px;
  letter-spacing: 15px;
  animation: lighting 1.4s linear infinite;
}

@keyframes lighting {
  0% {
    color : #0195A3;
    text-shadow: none;
  }
  90% {
    color : #0195A3;
    text-shadow: none;
  }

  100% {
    color : #38CFDD;
    text-shadow: 0 0 7px #38CFDD, 0 0 50px #018793;
  }
}

ul li:nth-child(1){
  animation-delay: 0;
}
ul li:nth-child(2){
  animation-delay: 0.1s;
}
ul li:nth-child(3){
  animation-delay: 0.2s;
}
ul li:nth-child(4){
  animation-delay: 0.3s;
}
ul li:nth-child(5){
  animation-delay: 0.4s;
}
ul li:nth-child(6){
  animation-delay: 0.5s;
}
ul li:nth-child(7){
  animation-delay: 0.6s;
}
ul li:nth-child(8){
  animation-delay: 0.7s;
}
ul li:nth-child(9){
  animation-delay: 0.8s;
}
ul li:nth-child(10){
  animation-delay: 0.9s;
}
ul li:nth-child(11){
  animation-delay: 1.0s;
}
ul li:nth-child(12){
  animation-delay: 1.1s;
}
ul li:nth-child(13){
  animation-delay: 1.2s;
}
ul li:nth-child(14){
  animation-delay: 1.3s;
}
ul li:nth-child(15){
  animation-delay: 1.4s;
}

</style>