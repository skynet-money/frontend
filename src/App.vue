<template>
  <HomeView />
</template>

<script>
import HomeView from './components/HomeView.vue';


export default {
  name: "App",
  components: {
    HomeView,
  },
  async mounted() {
    
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=DotGothic16&display=swap");
html,
body,
#app {
  background-color: #000024;
  font-family: "DotGothic16";
  font-weight: 400;
  font-style: normal;
  text-align: center;
}
</style>
