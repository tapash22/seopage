<template>
<div class="header">
    <v-sheet class="d-flex pa-2 " color="transparent">
        <v-icon>
            mdi-circle-half
        </v-icon>
        <h2 class="text-body-1 font-weight-bold">
            Incomplete
        </h2>
        <v-spacer></v-spacer>
        <span style="background:rgba(128, 128, 128, 0.199); width:20px;display:flex;justify-content:center;">
            0
        </span>
    </v-sheet>
</div>
</template>

<script>
export default {
    name:'header',
    props:[]
}
</script>
