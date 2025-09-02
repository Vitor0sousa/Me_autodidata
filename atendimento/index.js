const express = require("express");
const app = express();
const router = require("./routes/index");
const conexao = require("./infraestrutura/conexao");
const tabela = require("./infraestrutura/tabela");
tabela.init(conexao);
router(app);

app.listen(3000,(error)=>{
    if(error){
        console.log("deu erro");
        return;
    }
    console.log("subiu rodou")
});

