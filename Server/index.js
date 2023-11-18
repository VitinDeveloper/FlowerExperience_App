const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createPool({

    host: "localhost",
    user: "root",
    password: "Vovochica@123",
    database: "floweexerience"
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))


//Cadastrar Dados no BANCO DE DADOS//
app.post("/register", (req, res) => {

    const { nome, email, senha } = req.body;


    let SQL = `INSERT INTO usuarios (nome, email, senha ) VALUES (?,?,?)`;

    db.query(SQL, [nome, email, senha], (err, result) => {
        console.log(err);
    });

})

//Verificar LOGIN no BANCO DE DADOS//

app.post('/user/login', (req, res) => {
    const { email, senha } = req.body
   
    let sql = `SELECT * FROM usuarios WHERE email = ? AND senha = ?`;

    db.query(sql,[email, senha], (err, result) => {
       
        const usuario = result[0]

        if (!usuario) {
            return res.status(401).json({ message: 'Credenciais inválidas.' });
        } else {
            return res.status(200).json({ usuario });
        }

    });

})

// fazer a req para o back de todas as plantas

// armezenar em uma array

// usar o filter do js


app.listen(19007, () => {

    console.log("rodando servidor")

});