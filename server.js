const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = 3000;

// Usando body-parser para analisar JSON no corpo das requisições
app.use(bodyParser.json());
app.use(cors());

app.use(cors({
  origin: 'http://localhost:8080/',
  optionsSuccessStatus: 200 // Algumas versões do Express precisam disso
}));


app.post('/login', async (req, res) => {
  try {
    const { cpfcnpj, senha } = req.body;
    // Envie os dados de login para a API
    const response = await axios.post('https://cargasbrasil.somee.com/api/User/Login', {
      cpfcnpj,
      senha
    });
    // Encaminhe a resposta da API para o cliente
    res.json(response.data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Iniciando o servidor
app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}`);
});