<template>

    <table class="table">
    <thead class="thead-dark">
        <tr>
        <th scope="col">Name</th>
        <th scope="col">Nationality</th>
        <th scope="col">Attacks</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="saint in Saint" :key="saint.id">
            <td> {{ saint.name }} </td>
            <td> {{ saint.nationality }} </td>
            <td> {{ saint.attacks }} </td>
        
        </tr>
    </tbody>
    </table>

</template>

<script>
import axios from "axios"

export default {
    name: 'Saints',
    data(){
        return{

        }
    },
    mounted(){
        this.getSaint();
    },
    methods: {
        getSaint(){
            axios
            .get("https://saint-seiya-api.herokuapp.com/api/characters")
            .then(response => {
                console.log(response)
                this.Saint = response.data

            })
            .catch( e =>{
                console.log(e)
            })
        }
    }

    
}
</script>

<style scoped>

</style>