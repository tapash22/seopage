<template>
  <v-app>
    <v-main>
      <About />
      <v-row class="d-flex justify-center">
        <v-col cols="12" sm="12" md="8" lg="8" xl="8">
          <v-card color="red lighten-5" class="pa-4 " elevation="5">

            <v-card-text>
              <ChartView />
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
// import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import ChartView from '@/views/ChartView.vue'

export default {
  name: 'App',

  components: {
    About,
    ChartView
  },

  data: () => ({
    //
  }),
};
</script>
