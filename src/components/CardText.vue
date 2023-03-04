<template>
<div class="card-text">
    <v-list class="d-flex justify-space-between pa-0">
        <v-list-item class="pa-0 mx-2 text-body-2 ">
            {{cardtext}}
        </v-list-item>
        <v-list-item-action-text>
           <CardAction :count="count"/>
        </v-list-item-action-text>
    </v-list>
</div>
</template>

<script>
import CardAction from './CardAction.vue';

export default {
    name:'card-text',
    props:['cardtext','count'],

    components:{
        CardAction
    }
}
</script>
