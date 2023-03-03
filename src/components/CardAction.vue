<template>
<div class="card-actions">
    <v-icon>mdi-facebook</v-icon>
    <v-list-item-title class="text-body-2 pa-2">1/2</v-list-item-title>
</div>
</template>

<script>
export default {
    name:'card-actions',
    props:[]
}
</script>

<style scoped>
.card-actions{
    display: flex;
    justify-content: start;
    align-self: center;
    border-radius: 5px;
    background: rgba(128, 128, 128, 0.199);
    right: 5px;
}
</style>