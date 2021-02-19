<template>
   <b-container>
     <b-row>
       <b-col v-for="im in pixaImagenes" :key"im.id" md="2" class="py-2 text-center">
           <b-img thumbnail fluid src=im.previewURL">
       </b-col>
     </b-row>
   </b-container>

</template>

<script>
     import ServicioAPI from "./ServicioAPI";
     export default {
       name: "Pixabay",
       data(){
       return{
          pixaImagenes:[],
          buscar: ""
          },
      }
      methods:{
      async buscarImagenes(){
        const consulta = await ServicioAPI.getImagenes(this.buscar);
        this.pixaImagenes = consulta;
         console.log(consultal);
        }
     },
     mounted(){
     this.buscarImagenes();
     }
  }
</script>

<style>

</style>
