<?php
include ('conexao.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Buscar Produtos</title>
</head>
<body>
    
<h1>Buscar Produto</h1>
<form action="" >
    <input type="text" placeholder="Escreva aqui sua pesquisa" method="post"  name="busca" >
    <input type="submit" name="SendPesqUser" value="Pesquisar">
</form>

<table border="1" width="550">
    <tr>
        <th>Id</th>
        <th>Codigo</th>
        <th>Descricao</th>
        <th>Un</th>
        <th>Preco</th>
    </tr>
    <?php
    if (!isset($_GET['busca'])) {
    ?>
    <tr>
        <td colspan="5">Digite algo para Pesquisar</td>
    </tr>
     
</table>

<?php

}else{
$pesquisa = $conexao->real_escape_string($_GET['busca']);

$consulta = "SELECT * FROM produtos
WHERE descricao LIKE '%$pesquisa%'
OR codigoL LIKE '%$pesquisa%' ";
$con = $conexao->query($consulta) or die($conexao->error);
if($con->num_rows ==0){
    ?>
<tr>
    <td colspan="5">Nenhum resultado encontrado.</td>
</tr>
<?php
}else{
    while($dados= $con->fetch_assoc()){
        ?>
        <tr>
            <td><?php echo $dados['id']; ?></td>
            <td><?php echo $dados['codigoL']; ?></td>
            <td><?php echo $dados['descricao'];?> </td>
            <td><?php echo $dados['unidade'];?>  </td>
            <td><?php echo "R$ ".$dados['preco'];?></td>

        </tr>
    <?php
    }
}
?>
<?php






// $sql_code = "SELECT * FROM produtos WHERE descricao LIKE '$pesquisa' OR codigoL '$pesquisa' ";



//$sql_query = $mysqli->query($sql_code) or die("ERRO ao consultar! " . $mysqli->error);



}
?>

</body>
</html>