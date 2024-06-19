import axios from 'axios';

export async function buscarDados() {
    try {
        const response = await axios.get("https://cargasbrasil.somee.com/api/User/ConsultarFormulario");
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export async function aprovarCadastro(cadastroAprovado, cpfcnpj) {
    var admLogado = localStorage.getItem('cpfcnpj');
    admLogado.split('"', '')
    try{
        await axios.post("https://cargasbrasil.somee.com/api/User/AprovarCadastro", {
            admLogado,
            cadastroAprovado,
            cpfcnpj
        });
        if (cadastroAprovado) return "Cadastro aprovado!";
        if (!cadastroAprovado) return "Cadastro negado!";
    }catch(error){
        console.error('Error fetching data:', error);
        throw error; 
    }
}