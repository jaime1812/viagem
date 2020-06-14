// yarn add pg

const Pool = require('pg').Pool;

//1 - Abrir a conexão
//2 - Executar o comando SQL (query, insert)
//3 - Fechar a conexão

// Viagem (id, cidade, pais, gostei)

const pool = new Pool ({  
    user: 'xkwdzzscmhwicx',
    password: '998c55ea896727a30fe9264b07e4dfa47b91475ee08178a495a7adb61b80797c',
    host: 'ec2-34-197-141-7.compute-1.amazonaws.com',
    database:'derr3lolq625nu',
    port: 5432,
    ssl: {rejectUnauthorized: false }
})

//const sql = `
//    CREATE TABLE IF NOT EXISTS viagem
//    (
//        id serial primary key,
//        cidade varchar (200),
//        pais varchar (200),
//        gostei boolean
//    )
//
//`;


// pool.query(sql, function(error, result) {
//    if(error)
//         throw error
//        
//    console.log ('Tabela criada com sucesso!');    
//
// });

//INSERT
//const sql_insert = `
//        INSERT INTO viagem (cidade, pais, gostei) VALUES ('São José do Rio Preto','Brasil', true)
//`;

//pool.query(sql_insert, function(error, result) {
//   if(error)
//        throw error;
//
//   console.log(result.rowCount);
//})

//SELECT
// const sql_select = `SELECT * FROM viagem`;
//
// pool.query(sql_select, function(error, result) {
//    if(error)
//         throw error;
//
//     console.log(result.rows);
// })