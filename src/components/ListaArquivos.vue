<template>
    <div>
        <v-card class="mx-auto" max-width="80%">
            <v-toolbar color="primary">
                <v-toolbar-title>Documentos pendentes de aprovação</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon="mdi-magnify" variant="text"></v-btn>
            </v-toolbar>
            <v-list lines="two">
                <v-list-item v-for="dado in dados" :key="dado.cpfcnpj" :title="dado.nome" :subtitle="dado.cpfcnpj + ' - ' + dado.telefone + ' - ' + dado.email">
                    <template v-slot:prepend>
                        <v-btn color="#FFFF" style="background-color: slategrey; margin-right: 8px;"
                            icon="mdi-clipboard-text" variant="text" @click="abrirModalImagem(dado.fotoHabilitacao)" />
                        <v-btn color="#FFFF" style="background-color: slategrey;" icon="mdi-clipboard-text"
                            variant="text" @click="abrirModalImagem(dado.fotoDocumentoVeiculo)" />
                    </template>
                    <template v-slot:append>
                        <v-btn color="#FFFF" style="background-color: red; margin-right: 8px;" icon="mdi-close"
                            variant="text" @click="aprovarCadastro(false, dado.cpfcnpj)"/>
                        <v-btn color="#FFFF" style="background-color: green;" icon="mdi-check" variant="text"
                            @click="aprovarCadastro(true, dado.cpfcnpj)" />
                    </template>
                </v-list-item>
            </v-list>
        </v-card>

        <ModalImagem :value="modalImagem" :imageSrc="imageSrc" @input="fecharModal"></ModalImagem>
    </div>
</template>

<script>
// import { buscarDados } from '@/services/ArquivoService';
import { aprovarCadastro } from '@/services/ArquivoService';
import ModalImagem from './ModalImagem.vue'

export default {
    components: { ModalImagem },
    data: () => ({
        dados: [],
        modalImagem: false,
        imageSrc: ''
    }),
    mounted() {
        this.carregarDados();
    },
    methods: {
        carregarDados() {
            this.dados = [{ nome:"Rafaella", cpfcnpj: "5345345", telefone: "4554", email: "teste@gmail.com", fotoHabilitacao: "", fotoDocumentoVeiculo: "" }]
            // buscarDados()
            //     .then(dados => {
            //         this.dados = dados.data;
            //         console.log("Dados: ", this.dados);
            //     })
            //     .catch(error => {
            //         console.error('Erro ao buscar dados:', error);
            //     });
        },
        abrirModalImagem(documento) {
            this.imageSrc = 'data:image/jpeg;base64,' + documento;
            this.modalImagem = true;
        },
        fecharModal() {
            this.modalImagem = false;
        },
        aprovarCadastro(cadastroAprovado, cpfcnpj){
            aprovarCadastro(this.$store.getters.user, cadastroAprovado, cpfcnpj)
        }
    }
};
</script>

<style></style>