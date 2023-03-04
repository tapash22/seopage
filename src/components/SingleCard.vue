<template>
<div class="single-card">
    <v-card color="white" elevation="0" class="rounded-sm my-2">
        <v-card-text class="pa-0">
            <CardHeader :clients="card.client" />
        </v-card-text>
        <v-card-text class="pa-0 ma-0">
            <CardText :cardtext="card.text" :count="card.count"/>
        </v-card-text>
        <v-card-text class="pa-1">
            <CardFooter :images="card.listImage"  :likes="card.like" :card="card" />
        </v-card-text>
    </v-card>
</div>
</template>

<script>
import HeaderBox from './HeaderBox.vue';
import CardHeader from './CardHeader.vue';
import CardText from './CardText.vue';
import CardFooter from './CardFooter.vue'


export default {
    name: 'single-card',
    props: ['card'],
    components: {
        CardHeader,
        CardText,
        CardFooter
    },
}
</script>
