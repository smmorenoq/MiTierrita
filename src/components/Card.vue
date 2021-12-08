<template>
  <div>
    <b-card
        title="Card Title"
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
    >
        <b-card-text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
        </b-card-text>

        <b-button href="#" variant="primary">Go somewhere</b-button>
    </b-card>
  </div>
</template>

<script>
import Axios from 'axios';
//import Header from '@/components/Header.vue';
//import Footer from '@/components/Footer.vue';

export default {
    name: "Producto", 
    data(){
        return{
            listaProductos: null
        }
    },
    methods:{

    },
    mounted:function(){
        let url="http://localhost:8080/api/producto";
        Axios.get(url).then(data=>{
            this.listaProductos = data.data;
            console.log(data);
        })
    }
}
</script>

<style>

</style>