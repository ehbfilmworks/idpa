<script setup>
import {RouterLink, RouterView} from 'vue-router'
import Navigation from "@/components/navigation.vue";
import Footer from "@/components/footer.vue";

</script>

<template>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EHB-Filmworks</title>
  </head>
  <header>
    <Navigation></Navigation>
  </header>
  <RouterView/>
  <footer style="margin-top: 70px">
    <Footer></Footer>
  </footer>
</template>


<style scoped>
</style>
