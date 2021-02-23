<template>
  <div class="home">

  
    <div v-if="userLogged" class="mt-5">
        <FormularioTR3 msg="REGISTRO DE DETALLE DEL PERSONAL DE APOYO LOGÍSTICO Y ADMINISTRATIVO PARA LA ATENCIÓN EN SALUD"/>
    </div>
    <div v-else>
    <br/>
        <login/>
    </div>

    
  </div>
</template>

<script>
// @ is an alias to /src
import FormularioTR3 from '@/components/FormularioTR3.vue'
import login from '@/views/Login.vue'
import auth from "@/auth";

export default {
  name: 'Participante',
  components: {
    FormularioTR3,
    login
  },
  views:{
      login
  },
  computed: {
    userLogged() {
      return auth.getUserLogged();
    }
}
}
</script>