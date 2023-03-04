<template>
<div class="card-header">
    <v-list class="d-flex justify-space-between pa-0">
        <IntroOfCard v-for="clnt in clients" :key="clnt.id" :clnt="clnt"/>
    </v-list>
</div>
</template>

<script>
import IntroOfCard from './IntroOfCard.vue';

export default {
    name: 'card-header',
    props: ["clients"],

    components: {
        IntroOfCard
    }
}
</script>
