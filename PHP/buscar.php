<?php
include_once ('conexao.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Buscar Produts</title>
</head>
<body>
    
<h1>Buscar Produto</h1>
<?php

$produto = "SELECT * FROM produtos"
$banco = new mysqli(SERVIDOR,USER,SENHA,BANCO);


?>
</body>
</html>