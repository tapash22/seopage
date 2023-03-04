<template>
<div class="top">
    <v-sheet class="d-flex pa-2 sheet" color="transparent">
        <v-icon :color="color">
            mdi-circle-half
        </v-icon>
        <h2 class="text-body-1 font-weight-bold">
          {{name}}
        </h2>
        <v-spacer></v-spacer>
        <span>
          {{count}}
        </span>
    </v-sheet>
</div>
</template>

<script>
export default {
    name: 'top',
    props: ['name','color','count']
}
</script>

<style scoped>
.sheet{
    position: static;
}
span {
    background: rgba(128, 128, 128, 0.199);
    width: 20px;
    display: flex;
    justify-content: center;
}
</style>
