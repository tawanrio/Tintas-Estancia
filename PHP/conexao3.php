<?php 

define("SERVIDOR","localhost");
define("USER", "root");
define("SENHA", "");
define("BANCO", "tintasestancia");

 $conexao = new mysqli(SERVIDOR,USER,SENHA,BANCO);

if ($conexao->error){
    die("falha ao conectar o banco:".$conexao->error);
}
    

function inserirDados($codigoL,$descricao,$unidade,$preco){
   $conexao = new mysqli(SERVIDOR,USER,SENHA,BANCO);
    $sql = "INSERT INTO produtos (id,codigoL,descricao,unidade,preco)"
        ."values (default,'{$codigoL}','{$descricao}','{$unidade}','{$preco}')";
        
    $conexao->query($sql);
    $conexao->close();

}


?>