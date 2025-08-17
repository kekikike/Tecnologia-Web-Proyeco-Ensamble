const express = require('express');
const app = express();
const mysql = require('mysql2');
const puerto = 3000;

app.get('/', (req, res) => {
    res.send('Ruta de inicio');
    console.log('Aviso para Adm');
});

app.listen(puerto, () => {
    console.log('Servidor levantado en puerto ' + puerto);
});

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'cc++4kglt',
    database: 'Consultorio'
});

conexion.connect((err) => {
    if (err) {
        throw err;
    } else {
        console.log('Conexión exitosa');
    }
});

app.get('/roles', (req, res) => {
    let sql = 'SELECT * FROM TRoles';
    conexion.query(sql, (err, result) => {
        if (err) {
            console.log("Error al consultar TRoles");
            throw err;
        } else {
            res.send(result);
        }
    });
});
