<template>
<div class="card-header">
    <v-list class="d-flex justify-space-between pa-0">
        <IntroOfCard />
        <v-spacer></v-spacer>
        <IntroOfCard />
    </v-list>
</div>
</template>

<script>
import IntroOfCard from './IntroOfCard.vue';

export default {
    name: 'card-header',
    props: [],

    components: {
        IntroOfCard
    }
}
</script>
