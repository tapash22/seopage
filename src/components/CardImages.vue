<template>
<div class="card-images">
    <v-avatar size="30" v-for="image in images" :key="image">
        <v-img :src="image" />
    </v-avatar>
</div>
</template>

<script>
export default {
    name: 'card-images',
    props: ['images']
}
</script>

<style scoped>
.card-images{
    display: flex;
}
</style>
