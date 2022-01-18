<?php
include_once('conexao.php');

$validaUser = $_POST['login'];
$validaPass = $_POST['pass'];


//$query = "INSERT INTO usuarios (id,nome,email,senha) VALUE (DEFAULT,"
//echo $validaeUser;
$query = "SELECT * FROM 'usuarios' WHERE nome = '1q23';";

$pdo->query($query);





?>