<template>
<div class="items">
    <v-dialog v-model="dialog" scrollable max-width="300px">
        <template v-slot:activator="{ on, attrs }">
            <v-btn color="black" icon dark v-bind="attrs" v-on="on">
                <v-icon size="14">
                    mdi-paperclip
                </v-icon>
            </v-btn>
            <span class="text-caption mt-2">{{ getFile }}</span>
        </template>
        <v-card>
            <v-card-title>Selected file</v-card-title>
            <v-card-text>
                <form method="post">
                    <input name="file" type="file" placeholder="enter file" multiple style="" />
                    <v-btn @click="uploadFile" color="red" class="my-2">
                        upload
                    </v-btn>
                </form>
            </v-card-text>
        
        </v-card>
    </v-dialog>

</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'upload-image',
    data() {
        return {
            dialog: false,
            images:[]
        }
    },
    computed:{
        ...mapGetters(['getFile'])
    },
    
    methods: {
        onClick() {
            console.log('click ')
        },
        uploadFile() {
           this.$store.dispatch('uploadFile',this.images)
           this.dialog = false;
        }
    }

}
</script>

<style scoped>
input{
    border:1px solid black;
    border-radius: 5px;
    padding:5px; 
    width:250px;
    height:40px;
    
}
</style>
