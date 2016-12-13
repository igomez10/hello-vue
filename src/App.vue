<template>
  <div id="app">
    <tabla></tabla>
    <p>HOLA</p>
  </div>
</template>

<script>
import tabla from "./tabla.vue";
export default {
  name:"app",
  components:{tabla},
  data(){
    return{msg:"hola"}
  }
}
</script>
