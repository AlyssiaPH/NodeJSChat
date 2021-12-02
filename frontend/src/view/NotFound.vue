<template>
  <div>
    <div class="row">
      <div class="col">
        <text-light :text="dataContent"/>
          <div class="position-relative">
            <a href="/" class="position-absolute top-50 start-50 translate-middle">Retour</a>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import TextLight from "@/components/TextLight";
require('../css/global.css')
export default {
  props : {
    dataContent :{
      type : Object,
      require : true
    }
  },
  name: "NotFound",
  components: {
    TextLight
  },
  beforeCreate() {
    document.body.className = 'notFound';
  }
}
</script>

<style>


</style>