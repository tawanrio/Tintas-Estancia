<?php
$host = 'localhost';
$user = 'root';
$pass = '';

try {
    $pdo = new PDO("mysql:dbname=test;host=$host",$user,$pass);
} catch (PDOException $er) {
    echo "ERRO COM O BANCO DE DADOS: ". $er->getMessage();
} catch(Exception $er){
    echo "ERRO GENERICO: ".$er->getMessage();
}   
?>