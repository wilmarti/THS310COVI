<template>
 
<div>

    <b-jumbotron>
      <template #header>Reporta Facil</template>
      <template #lead>
        Reporte la informacion de talento humano en salud y del personal de apoyo logistico y administrativo para vacunacion por covid19
      </template>

      <hr class="my-4">

      <p>
          Registrate y empieza a reportar de manera fácil
      </p>

    <div v-if="userLogged" class="mt-5">
        <b-button :to="{name:'regparticipante'}" variant="success" href="#">Comenzar Registro</b-button>
    </div>
    <div v-else>
    <br/>
        <b-button :to="{name:'register'}" variant="danger" href="#">Regístrese Aquí</b-button>
    </div>

    </b-jumbotron>
</div>

</template>


<script>
import auth from "@/auth";

export default {
  name: 'Home',
  computed: {
    userLogged() {
      return auth.getUserLogged();
    }
}
}
</script>

