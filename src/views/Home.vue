<template>
<div class="home">
    <v-container>
        <v-row class="d-flex d-block-sm-and-down">
            <v-col cols="12" sm="12" md="3" lg="3" xl="3" class="item">
                <HeaderBox :name="groupHeader1.name" :color="groupHeader1.color" :count="groupHeader1.count" />
                <SingleCard v-for="card in cards" :key="card.id" :card="card"/>
            </v-col>
            <v-col cols="12" sm="12" md="3" lg="3" xl="3" class="item">
                <HeaderBox :name="groupHeader2.name" :color="groupHeader2.color" :count="groupHeader2.count" />
                <SingleCard v-for="card in cards" :key="card.id" :card="card"/>
            </v-col>
            <v-col cols="12" sm="12" md="3" lg="3" xl="3" class="item">
                <HeaderBox :name="groupHeader3.name" :color="groupHeader3.color" :count="groupHeader3.count" />
                <SingleCard v-for="card in cards" :key="card.id" :card="card"/>
            </v-col>
            <v-col cols="12" sm="12" md="3" lg="3" xl="3" class="item">
                <HeaderBox :name="groupHeader4.name" :color="groupHeader4.color" :count="groupHeader4.count" />
                <SingleCard v-for="card in cards" :key="card.id" :card="card"/>
            </v-col>
        </v-row>
    </v-container>
</div>
</template>

<script>
import HeaderBox from '@/components/HeaderBox.vue';
import SingleCard from '@/components/SingleCard.vue'
import {
    mapState
} from 'vuex';

export default {
    name: 'home',
    data() {
        return {
            headerg: {
                name: "Incomplete",
                color: "yellow",
                count: 5,
            }
        }
    },
    components: {
        HeaderBox,
        SingleCard
    },

    computed: {
        ...mapState(['cards','groupHeader1','groupHeader2','groupHeader3','groupHeader4'])
    }

}
</script>

<style scoped>
.item {
    background: rgba(209, 199, 199, 0.199);
    height: 100vh;
    overflow-y: scroll;
    overflow-x: hidden ;
}
</style>
