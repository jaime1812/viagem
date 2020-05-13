const express = require('express');

const server = express();

server.use(express.json());

const viagem = [
    {id: 1, cidade: 'Rio de Janeiro', pais: 'Brasil', gostei: 'Sim'},
    {id: 2, cidade: 'Bahia', pais: 'Brasil', gostei:'Sim'} 
]

server.get('/viagem', function(request, response) {
    response.json(viagem);
})

server.post('/viagem', function(request, response) {
 
    const {id, cidade, pais, gostei} = request.body;
 
    viagem.push({id, cidade, pais, gostei});
    response.status(204).send();
})

server.put('/viagem/:id', function(request, response){
    const id = request.params.id;
    const {cidade, pais, gostei} = request.body;
 
    for(let i = 0; i < viagem.length; i++){
        if(viagem[i].id == id) {
            viagem[i].cidade = cidade;
            viagem[i].pais = pais;
            viagem[i].gostei = gostei;
            break;
        }
    }
 
    return response.status(204).send();
})

server.delete('/viagem/:id', function(request, response) {
 
    const id = request.params.id;
 
    for(let i = 0; i < viagem.length; i++) {
        if(viagem[i].id == id) {
            viagem.splice(i, 1);
            break;
        }
    }
 
    return response.status(204).send();
})

server.listen(process.env.PORT || 3000);