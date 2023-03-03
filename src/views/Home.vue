<template>
<div class="home">
    <v-container>
        <v-row class="d-flex">
            <v-col cols="12" sm="12" md="3" lg="3" xl="3" class="item">
               <HeaderBox />
               <SingleCard v-for="i in 9" :key="i"/>
            </v-col>
            <v-col cols="12" sm="12" md="3" lg="3" xl="3" class="item">
               <HeaderBox />
               <SingleCard v-for="i in 9" :key="i"/>
            </v-col>
            <v-col cols="12" sm="12" md="3" lg="3" xl="3" class="item">
               <HeaderBox />
               <SingleCard v-for="i in 9" :key="i"/>
            </v-col>
            <v-col cols="12" sm="12" md="3" lg="3" xl="3" class="item">
               <HeaderBox />
               <SingleCard v-for="i in 9" :key="i"/>
            </v-col>
        </v-row>
    </v-container>
</div>
</template>

<script>
import HeaderBox from '@/components/HeaderBox.vue';
import SingleCard from '@/components/SingleCard.vue'

export default {
    name: 'home',
    components: {
        HeaderBox,
        SingleCard
    }

}
</script>

<style scoped>
.item{
    background:rgba(209, 199, 199, 0.199);
    height: 100vh;
    overflow: scroll;
}
</style>