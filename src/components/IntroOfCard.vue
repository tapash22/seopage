<template>
<div class="intro-of-card">
    <v-list-item class="pa-0 w-25">
        <v-avatar size="24">
            <v-img :src="clnt.cimage" />
        </v-avatar>
        <v-list-item-title class="text-caption text-start">
            {{clnt.name}}
        </v-list-item-title>
    </v-list-item>
</div>
</template>

<script>
export default {
    name:'intro-of-card',
    props:['clnt']
}
</script>