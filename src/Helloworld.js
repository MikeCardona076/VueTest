import { createApp } from 'vue'

var prueba = new Vue({
    el:"#star-wars-people",
    data:{
      people: null
    },
    mounted: function(){
      $.getJSON("http://swapi.co/api/people/", data => this.people = data.results);
    }
  })