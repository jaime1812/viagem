const express = require('express');
const Pool = require('pg').Pool;
const cors = require('cors');

const pool = new Pool ({
    user: 'xkwdzzscmhwicx',
    password: '998c55ea896727a30fe9264b07e4dfa47b91475ee08178a495a7adb61b80797c',
    host: 'ec2-34-197-141-7.compute-1.amazonaws.com',
    database:'derr3lolq625nu',
    port: 5432,
    ssl: {rejectUnauthorized: false }
})

const server = express();

server.use(cors());

server.use(express.json());

// Viagem (id, cidade, pais, gostei)

// GET
server.get('/viagem', async function(request, response) {
   result = await pool.query('SELECT * FROM viagem');

   return response.json(result.rows);
})

server.get('/viagem/search', async function(request, response) {
    const cidade = request.query.cidade;
    const sql = `SELECT * FROM viagem WHERE cidade ILIKE $1`;
    const result = await pool.query(sql, ["%" + cidade + "%"]);
    return response.json(result.rows);
})

server.get('/viagem/:id', async function(request, response) {
    const id = request.params.id;
    const sql = `SELECT * FROM viagem WHERE id = $1`
    const result = await pool.query(sql, [id]);
    return response.json(result.rows);
})
 
//POST
server.post('/viagem', async function(request, response) {
    const cidade = request.body.cidade;
    const pais = request.body.pais;
    const sql= `INSERT INTO viagem (cidade, pais, gostei) VALUES ($1, $2, $3)`;
    await pool.query(sql, [cidade, pais, true]);
    return response.status(204).send();
})

//DELETE
server.delete('/viagem/:id', async function(request, response) {
    const id = request.params.id;
    const sql = `DELETE FROM viagem WHERE id = $1`;
    await pool.query(sql, [id]);
    return response.status(204).send();
})


//UPDATE
server.put('/viagem/:id', async function(request, response) {
    const id = request.params.id;
    const { cidade, pais, gostei } = request.body;
    const sql = `UPDATE viagem SET cidade = $1, pais = $2, gostei = $3 WHERE id = $4`;
    await pool.query(sql, [cidade, pais, gostei, id]);
    return response.status(204).send();
})


//UPDATE DO gostei
server.patch('/viagem/:id/gostei', async function(request, response) {
    const id = request.params.id;
    const sql = `UPDATE viagem SET gostei = true WHERE id = $1`;
    await pool.query(sql, [id]);
    return response.status(204).send();
})

server.patch('/viagem/:id/naogostei', async function(request, response) {
    const id = request.params.id;
    const sql = `UPDATE viagem SET gostei = false WHERE id = $1`;
    await pool.query(sql, [id]);
    return response.status(204).send();
})

server.listen(process.env.PORT || 3000);