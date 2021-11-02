<?php
include ('conexao2.php');


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
<form action="">
    <input type="text" placeholder="Escreva aqui sua pesquisa"  method="post" name="busca" >
    <input type="submit" value="Pesquisar">
</form>

<table border="1" width="550">
    <tr>
        <th>Codigo</th>
        <th>Descricao</th>
        <th>Preco</th>
    </tr>
    <tr>
        <td colspan="3">Digite algo para Pesquisar</td>
    </tr>

</table>

<?php

$pesquisa = $mysqli->real_escape_string($_GET['busca']);
$sql_code = "SELECT * FROM produtos WHERE descricao LIKE '$pesquisa' OR codigoL '$pesquisa' ";



$sql_query = $mysqli->query($sql_code) or die("ERRO ao consultar! " . $mysqli->error);




?>
</body>
</html>