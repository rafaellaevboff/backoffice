<template >
    <div v-if="dialogVisible">
        <v-dialog v-model="dialogVisible" max-width="550" :overlay="overlayStyle">
            <v-card>
                <v-toolbar color="primary" dark>
                    <v-spacer></v-spacer>
                    <v-btn icon @click="fecharModal">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </v-toolbar>
                <v-img :src="imageSrc" contain />
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    props: {
        imageSrc: String,
        value: Boolean
    },
    computed: {
        overlayStyle() {
            return { backgroundColor: 'rgba(0, 0, 0, 0.5)' };
        }
    },
    watch: {
        value(newValue) {
            this.dialogVisible = newValue;
        }
    },
    methods: {
        fecharModal() {
            this.$emit('input', false);
        }
    }
};
</script>

<style scoped>
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9999;
    cursor: pointer;
}
</style>