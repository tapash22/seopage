<template>
<div class="card-footer-tag">
  
    <v-icon size="14">{{icon}}</v-icon>
    <span class="text-caption">{{count}}</span>
</div>
</template>

<script>
export default {
    name:'card-footer-tag',
    props:['icon','count']
}
</script>

<style scoped>
.card-footer-tag{
    display: flex;
    justify-content: start;
    margin: 5px;
}
</style>