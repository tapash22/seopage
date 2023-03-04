<template>
<div class="card-footer">
    <v-list class="pa-0 d-flex justify-space-around">
        <v-list-item class="pa-0 d-flex justify-space-around">
            <CardImages :images="images" />
        </v-list-item>
        <v-list-item>
            <v-avatar color="#808081" size="26" class="text-caption">
                {{likes}}+
            </v-avatar>
            <CardFooterTag :icon="card.icon2" :count="card.count2"/>
            <UploadImage />
            <CardFooterTag :icon="card.icon1" :count="card.count1"/>
        </v-list-item>
    </v-list>
</div>
</template>

<script>
import CardFooterTag from './CardFooterTag.vue';
import CardImages from './CardImages.vue';
import UploadImage from './UploadImage.vue';

export default {
    name: 'card-footer',
    props: ['images', 'likes', 'count', 'card'],

    components: {
        CardFooterTag,
        CardImages,
        UploadImage
    },

}
</script>

<style scoped>
.items {
    display: flex;
    justify-content: start;
}
</style>
