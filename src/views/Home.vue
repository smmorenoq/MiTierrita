<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Card></Card>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Card from '../components/Card.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Header,
    Footer
  }

}
    Card
</script>
