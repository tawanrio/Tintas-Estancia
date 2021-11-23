<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
include_once('conexao.php');

$numpag = isset($_POST['data']) ? $_POST['data']: 1;
$proximo = isset($_POST['grast']) ? $_POST['grast']: 'vazio';


$dados = json_decode($numpag, true);
echo $dados;

//$grau = json_decode($offs, true);

function limit(\PDO $pdo, string $query,int $limit, int $offset,string $order = 'id'): \PDOStatement{
    $query_limit = "";
    switch ($pdo->getAttribute(PDO::ATTR_DRIVER_NAME)){
        case 'sqlserv':
        case 'oci':
            $query_limit = "$query ORDER BY $order OFFSET :offset ROWS FETCH NEXT :limit ROWNS ONLY";
            break;
        default:
        $query_limit = "$query ORDER BY $order LIMIT :limit  OFFSET :offset";
        break;
    }
     $statement = $pdo->prepare($query_limit);
     $statement->bindValue('offset',(int) $offset, PDO::PARAM_INT);
     $statement->bindValue('limit',(int) $limit, PDO::PARAM_INT);
  
     return $statement;
}
?>
<script>
   
</script>

<?php


$pagina = (isset($_REQUEST['pagina'])) ? $_REQUEST['pagina'] : 1;
$limit = 7;
$inicio = $pagina * $limit;
$offset = 0;

$query = "SELECT * FROM produtos  ";
$query_total = $pdo->query("SELECT COUNT(*) FROM ($query) q");
$total = $query_total->fetchColumn();
$statement = limit($pdo, $query, $limit, $offset);
$produtos = $statement->execute();



echo "<table border>";
echo "<tr><th>Descricao</th><th>Preço</th></tr>";
while($produtos = $statement->fetch()){
 
    
    echo "<tr>";
    echo "<td>{$produtos['descricao']}</td>";
    echo "<td>{$produtos['id']}</td>";
    echo "</tr>";
}
echo "</table>";


//echo (($pagina - 1) > 0) ? "<a href='paginacao.php?pagina=" . ($pagina-1) . "'>Anterior</a>" : "Anterior";
/*
echo (($pagina - 1) > 0) ? "<a href='paginacao.php?pagina=" . ($pagina-1) . "'>Anterior</a>" : "Anterior";
echo "&nbsp";
echo (($pagina) * $limit < $total) ? "<a href='paginacao.php?pagina=" . ($pagina+1) . "'>Proximo</a>" : "Proximo";
*/
//echo (($pagina) * $limit < $total) ? "<a href='paginacao.php?pagina=" . ($pagina+1) . "'>Proximo</a>" : "Proximo";



?>



</body>
</html>

