<?php 
/*
define("SERVIDOR","localhost");
define("USER", "root");
define("SENHA", "");
define("BANCO", "tintasestancia");
*/
$usuario = 'root';
$senha = '';
$database = "tintasestancia";
$host="localhost";

$mysqli = new mysqli($host,$usuario,$senha,$database);

//$mysqli = new mysqli(SERVIDOR,USER,SENHA,BANCO);

if ($mysqli->error){
    die("falha ao conectar o banco:".$mysqli->error);
}
    
/*
function inserirDados($codigoL,$descricao,$unidade,$preco){
    $banco = new mysqli(SERVIDOR,USER,SENHA,BANCO);
    $sql = "INSERT INTO produtos (codigoL,descricao,unidade,preco)"
        ."values ('{$codigoL}','{$descricao}','{$unidade}','{$preco}')";
        
    $banco->query($sql);
    $banco->close();

}
*/

?>