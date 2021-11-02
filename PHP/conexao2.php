<?php 


define("SERVIDOR","localhost");
define("USER", "root");
define("SENHA", "");
define("BANCO", "tintasestancia");

$mysqli = new mysqli(SERVIDOR,USER,SENHA,BANCO);
if ($mysqli ->connect_errno) {
    die("Falha na conexão com o banco de dados");
}



/*
$host = "localhost";
$db = "tintasestancia";
$password = "";
$user = "root";

$mysqli = new mysqli($host,$user,$password,$db);
if ($mysqli ->connect_errno) {
    die("Falha na conexão com o banco de dados");
}

echo 'teste';   
/*
$connection = mysql_connect($host,$db,$user,$password) or die(mysql_error());
mysql_select_db($db) or die (mysql_error());*/
?>