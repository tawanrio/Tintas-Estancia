<?php 
define("SERVIDOR","localhost");
define("USER", "root");
define("SENHA", "");
define("BANCO", "tintasestancia");

function inserirDados($codigoL,$descricao,$unidade,$preco){
    $banco = new mysqli(SERVIDOR,USER,SENHA,BANCO);
    $sql = "INSERT INTO produtos (codigoL,descricao,unidade,preco)"
        ."values ('{$codigoL}','{$descricao}','{$unidade}','{$preco}')";
        
    $banco->query($sql);
    $banco->close();

}


?>