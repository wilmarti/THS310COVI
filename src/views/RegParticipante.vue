<template>
  <div class="home">

  
    <div v-if="userLogged" class="mt-5">
        <ComRegParticipante/>
    </div>
    <div v-else>
    <br/>
        <login/>
    </div>

    
  </div>
</template>

<script>
// @ is an alias to /src
import ComRegParticipante from '@/components/ComRegParticipante.vue'
import login from '@/views/Login.vue'
import auth from "@/auth";

export default {
  name: 'Participante',
  components: {
    ComRegParticipante,
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