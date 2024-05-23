import axios from 'axios';

export async function buscarDados() {
    try {
        const response = await axios.get("https://cargasbrasil.somee.com/api/ConsultarFormulario");
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export async function aprovarCadastro(documentoUser, cadastroAprovado, cpfcnpj) {
    try{
        await axios.post("https://cargasbrasil.somee.com/api/AprovarCadastro", {
            documentoUser,
            cadastroAprovado,
            cpfcnpj
        });
        if (cadastroAprovado === true) return "Cadastro aprovado!";
        if (cadastroAprovado === false) return "Cadastro negado!";
    }catch(error){
        console.error('Error fetching data:', error);
        throw error; 
    }
}