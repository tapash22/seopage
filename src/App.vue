<template>
  <v-app>
    <v-main>
      <About />
    </v-main>
  </v-app>
</template>

<script>
// import Home from '@/views/Home.vue';
import About from '@/views/About.vue';

export default {
  name: 'App',

  components: {
    About
  },

  data: () => ({
    //
  }),
};
</script>
