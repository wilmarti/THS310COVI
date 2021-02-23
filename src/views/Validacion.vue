<template>
 <div>
    <table  class="table-responsive sm">
    <thead>
        <tr>
        <th scope="col"><b-button style="margin: 10px" size="sm" variant="success" v-b-modal.modalInsercion class="bg-info text-white" >Ingresar Personal a reportar</b-button></th>
     <!--   <th scope="col"><b-button style="margin: 10px" size="sm" variant="success" v-b-modal.modalInsercion class="bg-warning text-white" >Ingresar Personal Apoyo logístico</b-button></th>
           <th scope="col"><b-button style="margin: 10px" size="sm" variant="success" class="bg-success text-white" @click="refrescar" >Actualizar tabla</b-button></th> -->
        <!--  <th scope="col"><b-form-checkbox style="margin: 10px" id="checkbox-1" v-model="status" name="checkbox-1" unchecked-value="activos" value="Mostrar Todos" class="mb-3" @change="check($event)">{{status}}</b-form-checkbox></th> -->
    <!--       <th scope="col"><input type="text" placeholder="Buscar por NroId" class="form-control; margin: 20px; border-style: 1px;" style="width:150px;" v-model="buscar"></th>
        <th scope="col" Right># Registros <h5 style="color:red ;text-align:center; width:100px margin:1">{{listar.length}}</h5></th> -->
        </tr>
    </thead>
    </table> 
  <br/> <br/> <br/>
  

 <div id="modal2">
    <b-modal
      id="modalInsercion"
      size= 'lg'
      ref="modal2"
      title= "REGISTRO DE PERSONAL A REPORTAR"
      valor= item.Id_Curso     

    >
    <b-form @submit.stop.prevent="onSubmit"> 

    <p v-if="errors.length">
   <!--  <b>Por favor, corrija el(los) siguiente(s) error(es):</b> -->
    <b-alert show variant="danger">Por favor, corrija el(los) siguiente(s) error(es):</b-alert>
    <ul>
       <li v-for="error in errors" :key="error">{{ error }}</li>
    </ul>
    </p>

    <table>
        <tr>            
            <td colspan="2">
 
                 <b-form-group id="group-0" label-for="input-0">
                <b-input-group prepend="Es reporte de personal de apoyo logístico?:" class="mb-2 mr-sm-2 mb-sm-0"> 
                <b-form-select
                id="input-0"
                name="input-0"
                v-model="$v.form.EsThs.$model"
                :options="EsThs"
                :state="validateState('EsThs')"
                aria-describedby="input-0-live-feedback"
                ></b-form-select>
                <b-form-invalid-feedback  id="input-0-live-feedback">Por favor seleccione una opción válida</b-form-invalid-feedback>
                </b-input-group> 
                </b-form-group>
                
            </td>
        <tr>            
           <td>
                <b-form-group id="group-1" label-for="input-1">
                <b-input-group prepend="Tipo Id:" class="mb-2 mr-sm-2 mb-sm-0"> 
                <b-form-select
                id="input-1"
                name="input-1"
                v-model="$v.form.tipoid.$model"
                :options="TiposId"
                :state="validateState('tipoid')"
                aria-describedby="input-1-live-feedback"
                ></b-form-select>
                <b-form-invalid-feedback  id="input-1-live-feedback">Tipo Id Requerido</b-form-invalid-feedback>
                </b-input-group> 
                </b-form-group>
            </td>
            <td>
                <b-form-group id="group-2" label-for="input-2">
                <b-input-group prepend="Nro Id:" class="mb-2 mr-sm-2 mb-sm-0">
                <b-form-input
                id="input-2"
                name="input-2"
                v-model="$v.form.nroid.$model"
                :state="validateState('nroid')"
                aria-describedby="input-2-live-feedback"
                ></b-form-input>
                <b-form-invalid-feedback id="input-2-live-feedback">Requerido mas de 3 números</b-form-invalid-feedback>
                </b-input-group> 
                </b-form-group>
            </td>
        </tr>
         <tr>            
           <td>
                <b-form-group id="group-3" label-for="input-3">
                <b-input-group prepend="Código Entidad:" class="mb-2 mr-sm-2 mb-sm-0"> 
                <b-form-input
                id="input-3"
                name="input-3"
                v-model="$v.form.codentidad.$model"
                :state="validateState('codentidad')"
                aria-describedby="input-3-live-feedback"
                ></b-form-input>
                <b-form-invalid-feedback  id="input-3-live-feedback">Requerido solo 10 caracteres</b-form-invalid-feedback>
                </b-input-group> 
                </b-form-group> 
            </td>
            <td>
                 <b-form-group id="group-4" label-for="input-4">
                <b-input-group prepend="Nombre Entidad:" class="mb-2 mr-sm-2 mb-sm-0">
                <b-form-input
                id="input-4"
                name="input-4"
                v-model="$v.form.nomentidad.$model"
                :state="validateState('nomentidad')"
                aria-describedby="input-4-live-feedback"
                ></b-form-input>
                <b-form-invalid-feedback id="input-4-live-feedback">Nombre Entidad Requerido</b-form-invalid-feedback>
                </b-input-group> 
                </b-form-group>
            </td>
        </tr>     
         <tr>            
           <td>
                <b-form-group id="group-5" label-for="input-5">
                <b-input-group prepend="Primer Apellido:" class="mb-2 mr-sm-2 mb-sm-0"> 
                <b-form-input
                id="input-5"
                name="input-5"
                v-model="$v.form.papellido.$model"
                :state="validateState('papellido')"
                aria-describedby="input-5-live-feedback"
                ></b-form-input>
                <b-form-invalid-feedback  id="input-5-live-feedback">Requerido minimo 3 letras</b-form-invalid-feedback>
                </b-input-group> 
                </b-form-group>
            </td>
            <td>
                <b-form-group id="group-6" label-for="input-6">
                <b-input-group prepend="Segundo Apellido:" class="mb-2 mr-sm-2 mb-sm-0">
                <b-form-input
                id="input-6"
                name="input-6"
                v-model="$v.form.sapellido.$model"
                :state="validateState('sapellido')"
                aria-describedby="input-6-live-feedback"
                ></b-form-input>
                <b-form-invalid-feedback id="input-6-live-feedback">Segundo apellido inválido</b-form-invalid-feedback>
                </b-input-group> 
                </b-form-group>
            </td>
        </tr>      
        <tr>            
           <td>
                <b-form-group id="group-7" label-for="input-7">
                <b-input-group prepend="Primer Nombre:" class="mb-2 mr-sm-2 mb-sm-0"> 
                <b-form-input
                id="input-7"
                name="input-7"
                v-model="$v.form.pnombre.$model"
                :state="validateState('pnombre')"
                aria-describedby="input-7-live-feedback"
                ></b-form-input>
                <b-form-invalid-feedback  id="input-7-live-feedback">Requerido minimo 3 letras</b-form-invalid-feedback>
                </b-input-group> 
                </b-form-group>
            </td>
            <td>
                <b-form-group id="group-8" label-for="input-8">
                <b-input-group prepend="Segundo Nombre:" class="mb-2 mr-sm-2 mb-sm-0">
                <b-form-input
                id="input-8"
                name="input-8"
                v-model="$v.form.snombre.$model"
                :state="validateState('snombre')"
                aria-describedby="input-8-live-feedback"
                ></b-form-input>
                <b-form-invalid-feedback id="input-8-live-feedback">Segundo nombre inválido</b-form-invalid-feedback>
                </b-input-group> 
                </b-form-group>
            </td>
        </tr> 
        <tr>
           <td>
                <b-form-group id="group-9" label-for="input-9">
                <b-input-group prepend="Municipio:" class="mb-2 mr-sm-2 mb-sm-0"> 
                <b-form-select
                id="input-9"
                name="input-9"
                v-model="$v.form.municipio.$model"
                :options="Municipios"
                :state="validateState('municipio')"
                aria-describedby="input-9-live-feedback"
                ></b-form-select>
                <b-form-invalid-feedback  id="input-9-live-feedback">Municipio es Requerido</b-form-invalid-feedback>
                </b-input-group> 
                </b-form-group>
            </td>
            <td>
                <b-form-group id="group-10" label-for="input-10" v-show="$v.form.EsThs.$model">
                <b-input-group prepend="Perfil Profesional:" class="mb-2 mr-sm-2 mb-sm-0">
                <b-form-select
                id="input-10"
                name="input-10"
                v-model="perfil"
                :options="Perfil"
    
                ></b-form-select>

                </b-input-group> 
                </b-form-group> 
            </td>
        </tr>   
        <tr>
           <td>
                <b-form-group id="group-11" label-for="input-11">
                <b-input-group prepend="Servicio:" class="mb-2 mr-sm-2 mb-sm-0"> 
                <b-form-select
                id="input-11"
                name="input-11"
                v-model="$v.form.servicio.$model"
                :options="Servicio"
                :state="validateState('servicio')"
                aria-describedby="input-11-live-feedback"
                ></b-form-select>
                <b-form-invalid-feedback  id="input-11-live-feedback">Servicio es Requerido</b-form-invalid-feedback>
                </b-input-group> 
                </b-form-group>
            </td>
            <td>
                <b-form-group id="group-12" label-for="input-12">
                <b-input-group prepend="Área Covid:" class="mb-2 mr-sm-2 mb-sm-0">
                <b-form-select
                id="input-12"
                name="input-12"
                v-model="$v.form.areacovid.$model"
                :options="AreaCovid"
                :state="validateState('areacovid')"
                aria-describedby="input-12-live-feedback"
                ></b-form-select>
                <b-form-invalid-feedback id="input-12-live-feedback">Área Covid es Requerido</b-form-invalid-feedback>
                </b-input-group> 
                </b-form-group>
            </td>
        </tr> 
        <tr>
           <td>
                <b-form-group id="group-13" label-for="input-13">
                <b-input-group prepend="Dedicación:" class="mb-2 mr-sm-2 mb-sm-0"> 
                <b-form-select
                id="input-13"
                name="input-13"
                v-model="$v.form.dedicacion.$model"
                :options="Dedicacion"
                :state="validateState('dedicacion')"
                aria-describedby="input-13-live-feedback"
                ></b-form-select>
                <b-form-invalid-feedback  id="input-13-live-feedback">Dedicación es Requerido</b-form-invalid-feedback>
                </b-input-group> 
                </b-form-group>
            </td>
            <td>
                <b-form-group id="group-14" label-for="input-14">
                <b-input-group prepend="Cargo:" class="mb-2 mr-sm-2 mb-sm-0">
                <b-form-select
                id="input-14"
                name="input-14"
                v-model="$v.form.cargo.$model"
                :options="Cargo"
                :state="validateState('cargo')"
                aria-describedby="input-14-live-feedback"
                ></b-form-select>
                <b-form-invalid-feedback id="input-14-live-feedback">Cargo es Requerido</b-form-invalid-feedback>
                </b-input-group> 
                </b-form-group>
            </td>
        </tr> 
         <tr>
           <td>
                <b-form-group id="group-15" label-for="input-15">
                <b-input-group prepend="Ind Actualización:" class="mb-2 mr-sm-2 mb-sm-0"> 
                <b-form-select
                id="input-15"
                name="input-15"
                v-model="$v.form.indactualizacion.$model"
                :options="Indicador"
                :state="validateState('indactualizacion')"
                aria-describedby="input-15-live-feedback"
                ></b-form-select>
                <b-form-invalid-feedback  id="input-15-live-feedback">Indicador Actualización es Requerido</b-form-invalid-feedback>
                </b-input-group> 
                </b-form-group> 
            </td>
        </tr>                                              
    </table>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button class="ml-2" @click="resetForm()">Reset</b-button>
    </b-form>
    </b-modal>
    </div> 

<template>
  <div>
    <b-table striped hover responsive sticky-header head-variant="light" :items="PersonasEntidad" :fields="fields">

        <template #cell(Mostar_detalles)>
       
        <b-button size="sm" variant="outline-success" v-b-modal.modalEdicion @click="EditarParticipante(item.Id_Participante,item.TipoId,item.NroId,item.PrimerApellido,item.SegundoApellido,item.PrimerNombre,item.SegundoNombre,item.Estado)">Editar</b-button>
        <b-button size="sm" variant="outline-danger"  @click="EliminarParticipante(item.Id_Participante)" >Eliminar
        </b-button>
 
      </template>
      

    </b-table>
  </div>
</template>

 
  <br/> <br/> <br/>


    
    
  </div>
  
</template>



<style>
body {
  padding: 1rem;
}
</style>

<script>

import axios from 'axios'
//import VueScrollingTable from "vue-scrolling-table"
//import "vue-scrolling-table/dist/style.css"
import TiposIdenti from "../Data/TiposId.js";
import Municipios from "../Data/Municipio.js";
import Perfiles from "../Data/Perfiles.js";
import Servicios from "../Data/Servicios.js";
import Cargos from "../Data/Cargos.js";
import Habilitacion from "../Data/CodigoEntidad.js";
import { validationMixin } from "vuelidate";
import {
  required,
  minLength,
  alphaNum,
  maxLength,
  alpha,
  numeric,
} from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  data() {
    return {
      PersonasEntidad:null,
      columns: [
          { id: "Id", title: "ID", cssClasses: "w3" },
          { id: "TipoId", title: "Tipo Id", cssClasses: "w3" },
          { id: "NroId", title: "Nro Id", cssClasses: "NroId" },
          { id: "PrimerApellido", title: "Primer Apellido", cssClasses: "nombres" },
          { id: "SegundoApellido", title: "Segundo Apellido", cssClasses: "nombres" },
          { id: "PrimerNombre", title: "Primer Nombre", cssClasses: "nombres" },
          { id: "SegundoNombre", title: "Segundo Nombre", cssClasses: "nombres" },
          { id: "Estado", title: "Estado", cssClasses: "NroId" },
          ],
      fields: ['TipoRegistro','TipoId', 'NroId', 'PrimerApellido','SegundoApellido','PrimerNombre','SegundoNombre', 'Mostar_detalles'],
      //style
      freezeFirstColumn: false,
      scrollVertical: true,
      scrollHorizontal: true,
      syncHeaderScroll: true,
			syncFooterScroll: true,
      includeFooter: true,
      deadAreaColor: "white",
			maxRows: 100,
      //Fin Style
      TiposId: TiposIdenti,
      Municipios: Municipios,
      Perfil: Perfiles,
      Servicio: Servicios,
      Cargo: Cargos,
      CodHabilitacion:Habilitacion,
      AreaCovid: [
        { value: null, text: "Seleccione una opción" },
        { value: "01", text: "01 - ÁREA COVID" },
        { value: "02", text: "02 - OTRA ÁREA" },
      ],
      Dedicacion: [
        { value: null, text: "Seleccione una opción" },
        { value: "01", text: "01 - Tiempo completo" },
        { value: "02", text: "02 - Tiempo parcial" },
        { value: "03", text: "03 - Ocasional" },
      ],
      Indicador: [
        { value: null, text: "Seleccione una opción" },
        { value: "I", text: "I - Insertar el registro al sistema" },
        { value: "A", text: "A - Actualizar la información del registro" },
        { value: "E", text: "E - Eliminar el registro reportado por error" },
      ],
      EsThs: [
        { value: null, text: "Seleccione una opción" },
        { value: false, text: "SI" },
        { value: true, text: "NO" },
      ],
      errors: [],
      perfil: null,
      form: {
        tipoid: null,
        nroid: null,
        codentidad: null,
        nomentidad: null,
        papellido: null,
        sapellido: null,
        pnombre: null,
        snombre: null,
        municipio: null,
        //perfil: null,
        areacovid: null,
        servicio: null,
        dedicacion: null,
        cargo: null,
        indactualizacion: null,
        //status: null,
        EsThs: null
      },
    };
  },
  validations: {
    form: {
      nroid: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(17),
        alphaNum,
      },
      tipoid: { required },
      codentidad: {
        required,
        minLength: minLength(10),
        maxLength: maxLength(10),
        numeric,
      },
      nomentidad: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(100),
      },
      papellido: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(60),
        alpha,
      },
      sapellido: { minLength: minLength(3), maxLength: maxLength(60), alpha },
      pnombre: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(60),
        alpha,
      },
      snombre: { minLength: minLength(3), maxLength: maxLength(60), alpha },
      municipio: { required },
     // perfil: { required },
      areacovid: { required },
      servicio: { required },
      dedicacion: { required },
      cargo: { required },
      indactualizacion: { required },
      /*     status:{
        required
    }, */
      EsThs: {
        required,
      },
    },
  },
  mounted(){
      console.log("montaje participante")
      this.getPersonas();      
  },
  methods: {
      getPersonas(){
      axios.get('http://138.197.99.56/talento-humanos').then (response =>{
        this.PersonasEntidad = response.data
      })
      .catch (e => console.log(e))

    },

    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },
    resetForm() {
      this.form = {
        tipoid: null,
        nroid: null,
        codentidad: null,
        nomentidad: null,
        papellido: null,
        sapellido: null,
        pnombre: null,
        snombre: null,
        municipio: null,
        //perfil: null,
        areacovid: null,
        servicio: null,
        dedicacion: null,
        cargo: null,
        indactualizacion: null,
        //status: null,
        EsThs: null,
      };

      this.$nextTick(() => {
        this.$v.$reset();
      });
    },
    onSubmit() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }
      else{
        if (this.$v.form.EsThs.$model) {
            this.errors = [];
            if (this.perfil == null) { 
                      console.log("entroooooo");                       
                        this.errors.push('El perfil profesional es obligatorio cuando se selecciona NO en personal de apoyo logístico.'); 
                        return;                       
                    }
        }
        alert("Form submitted!");
      }

 
    },
  },
        computed:{
       
        listar: function() {
            //console.log("listar", this.inscritos)
            return this.CodHabilitacion.filter((item) => item.codigo.includes(this.buscar));
        }


        },
};
</script>

<style>

table.scrolling .w3 {
	width: 4.5em;
	min-width: 4.5em;
	max-width: 4.5em;
  height:2em; 
}
table.scrolling .NroId {
	width: 6em;
	min-width: 6em;
	max-width: 6em;
}
table.scrolling .nombres {
	width: 9em;
	min-width: 9em;
	max-width: 9em;
}
table.scrolling .action {
	width: 12em;
	min-width: 12em;
	max-width: 12em;
}


table.scrolling .botones {
column-span: 3;
}
table.scrolling tfoot tr th {
	width: 130em;
	min-width: 130em;
	max-width: 130em;
}
table.freezeFirstColumn thead tr,
table.freezeFirstColumn tbody tr {
	display: block;
	width: min-content;
}
table.freezeFirstColumn thead td:first-child,
table.freezeFirstColumn tbody td:first-child,
table.freezeFirstColumn thead th:first-child,
table.freezeFirstColumn tbody th:first-child {
	position: sticky;
	position: -webkit-sticky;
	left: 0;
}
* {
	font-family: sans-serif;
}
.box {
	clear: both;
	padding: 0;
	min-height: 300px;
	height: 60vh;
  /* width: 100vh; */
	margin-left: auto;
	margin-right: auto;
	overflow: hidden;
}
@font-face {
	font-family: FontAwesome;
	src: url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.woff);
}
.fa {
	font-family: FontAwesome;
}
</style>