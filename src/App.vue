<template>

  <div id="app">

    <div>

  <div>
  <b-navbar toggleable="lg" type="dark" variant="info" key:1>
    <b-navbar-brand :to="{name:'home'}">REPORTA FÁCIL THS</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item :to="{name:'login'}" >Ingresar</b-nav-item>
        <!-- <b-nav-item :to="{name:'regparticipante'}">Gestionar Personal</b-nav-item> -->
        <b-nav-item :to="{name:'regparticipante' ,query:{ref_payco: 1}}">Gestionar Personal</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-nav-text><p  v-if="userLogged">Usuario en sesión: {{userLogged.email}}</p></b-nav-text>
<!--           <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button> -->
        </b-nav-form>

             

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>User</em>
          </template>
          <!-- <b-dropdown-item href="#">Profile</b-dropdown-item> -->
          <b-dropdown-item  @click="cerrarSession()"  href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
  
</div>
   <b-container>
     <router-view/>
   </b-container> 
<!--       <div v-if="this.band === true"> -->
          <!-- <ComRegParticipante v-if="this.band" msg="REGISTRO DETALLE DEL TALENTO HUMANO ENSALUDxxx"/> -->
<!--           
      </div> -->
  </div>
</template>




<script>

import auth from "@/auth";
import ComRegParticipante from '@/components/ComRegParticipante.vue'

export default {
  name: "Home",
  data: () => ({
    urlapp: "",
    band: false
  }),  

    beforeUpdate(){
      this.userLogged();
 },
   components: {
    ComRegParticipante
  },
  methods:{
      async cerrarSession() {
      try {
        await auth.deleteUserLogged();
        this.$router.push("/")
      } catch (error) {
        console.log(error);
      } 
    },
    userLogged() {       
      return auth.getUserLogged();
    } 


    },
   watch: {
    "$route.query.ref_payco" :{
      inmediate:true,
      handler(ref_payco){
        console.log(`ref_payco a cambiado:${ref_payco}`);
        //this.band = true;
        //console.log("this.band",this.band);
        //this.$router.push("/regparticipante/" + 1)
        if (ref_payco == 1){            
            this.urlapp = 'https://secure.epayco.co/validation/v1/reference/' + ref_payco;
            console.log("si es igual a 1:",this.urlapp );
        }
      }
    }

  } 
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
