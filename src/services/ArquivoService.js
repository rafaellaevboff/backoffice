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
