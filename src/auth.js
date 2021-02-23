import axios from "axios";
import Cookies from "js-cookie";

//const ENDPOINT_PATH = "https://reqres.in/api/";

const ENDPOINT_PATH = "http://138.197.99.56/auth/local";

export default {
    setUserLogged(userLogged) {
    Cookies.set("userLogged", userLogged);
    },

    getUserLogged() {
    return Cookies.getJSON("userLogged");
    },

    deleteUserLogged() {
    Cookies.remove('userLogged');
    },

    register(username,email, password,CodigoHabilitacion) {
    //console.log("Hola ya llego",username,email, password,CodigoHabilitacion);
    const user = {username,email, password,CodigoHabilitacion };
     return axios.post(ENDPOINT_PATH + "/register", user)
    .then(response => {
      console.log(response);
      console.log("Registro correcto")
      //this.ExisteCodigo = 1;
    })
    .catch(error => {
      // Handle error.  
      console.log(response);
      this.ExisteCodigo = 0;
      console.log('An error occurred:', error.response);
    });     
    },


  login(identifier, password) {
    const user = {identifier, password};
    return axios.post(ENDPOINT_PATH , user)
    .then(response => {
      // Handle success.
       
   /*    console.log(axios.post(ENDPOINT_PATH , user));
      console.log('User profile', response.data.user.CodigoHabilitacion);
      console.log('User token', response.data.jwt); 
      console.log('User res', response);  */
      
      return response;
    })
    .catch(error => {
      // Handle error.
      console.log('An error occurred:', error.response);
    });
  },

  setPersona(persona) {

          const Key = 'Bearer ' + this.getUserLogged().token;
          
          return axios.post('http://138.197.99.56/talento-humanos', persona, {
            headers: {
              Authorization: Key
                //'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjEzNTk1NDk5LCJleHAiOjE2MTYxODc0OTl9.j83SNfgJfYBHmkJVbdqGVMWImjwtn19abn-kiN2F_iI',
            },
          }) 
          .then(response => {
            // Handle success.
            // console.log('Well done!');
            // console.log('User profile', response);
            alert("Registro Insertado correctamente.")
            
          })
          .catch(error => {
            // Handle error.
            if( error.response.data.statusCode == 500){
              alert("Imposible insertar el registro, revise que la identificacion no este repetida.")
            }
            console.log('An error occurred:', error.response);
            console.log('An error occurred:', error.response.data.statusCode);
          });    
    },  

    updatePersona(persona,id) {
      const Key = 'Bearer ' + this.getUserLogged().token;
     
      return axios.put('http://138.197.99.56/talento-humanos/'+id, persona, {
        headers: {
          Authorization: Key
            //'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjEzNTk1NDk5LCJleHAiOjE2MTYxODc0OTl9.j83SNfgJfYBHmkJVbdqGVMWImjwtn19abn-kiN2F_iI',
        },
      }) 
      .then(response => {
        // Handle success.
  /*       console.log('Well done!');
        console.log('User profile', response); */
        alert("Registro Actualizado correctamente.")
        
      })
      .catch(error => {
        // Handle error.
        if( error.response.data.statusCode == 500){
          alert("Imposible insertar el registro, revise que la identificacion no este repetida.")
        }
        console.log('An error occurred:', error.response);
      });    
},

    EliminarPersona(id){
      
      const Key = 'Bearer ' + this.getUserLogged().token;
      return axios.delete('http://138.197.99.56/talento-humanos/' + id, {
        headers: {
          Authorization: Key
            //'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjEzNTk1NDk5LCJleHAiOjE2MTYxODc0OTl9.j83SNfgJfYBHmkJVbdqGVMWImjwtn19abn-kiN2F_iI',
        },
      }) 
      .then(response => {
        // Handle success.
        console.log('Well done!');
        console.log('User profile', response);
        
      })
      .catch(error => {
        // Handle error.
        console.log('An error occurred:', error.response);
      }); 

    },

    //Metodo para consultar si la entidad esta e el maestro de entidades
    ConsultaExisteEntidad(codigo){
      console.log("Hola care bola", codigo);

      return axios.get('http://138.197.99.56/prestador/' + codigo).then(response => {

          console.log("esta es la data",response.data)
          // Handle success.
           
       /*    console.log(axios.post(ENDPOINT_PATH , user));
          console.log('User profile', response.data.user.CodigoHabilitacion);
          console.log('User token', response.data.jwt); 
          console.log('User res', response);  */
          
          //return response.data;
        })
        .catch(error => {
          // Handle error.
          console.log('An error occurred:', error.response);
        }); 
      }
  
  
};