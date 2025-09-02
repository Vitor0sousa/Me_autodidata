class Tabelas {
    init(conexao){this.conexao = conexao;
        this.criartabelaatendimento();
}
criartabelaatendimento(){
  const sql = `
  CREATE TABLE if NOT EXISTS  atendimentos (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	DATA DATE,
	servico VARCHAR(100),
	cliente VARCHAR(100),
	STATUS ENUM("pendente","realizado","cancelado")
);
  `;
  this.conexao.query(sql,(error)=>{
    if(error){
        cpnsole.log("DEU ERRO CZ");
        console.log(error.message());
        return;

    }
    console.log("subiu ❤")

  });

}
}

module.exports = new Tabelas();
    