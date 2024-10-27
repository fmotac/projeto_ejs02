let express = require('express')
let app = express()
app.set('view engine', 'ejs')

const port = process.env.PORT || 3000

app.get('/',function(req,res){

    let cursos = [{descricao: 'Logica de programação', ch: 40},
            {descricao:'Banco de dados', ch: 40},
            {descricao:'Javascript', ch: 20},
            {descricao:'NodeJS', ch: 40},
]

res.render('pages/index', {cursos: cursos})
});

app.get('/sobre',function(req,res){
    res.render('pages/sobre')
})

app.listen(port)

console.log("Servidor rodando")