<?php
include_once('conexao.php');

function limit(\PDO $pdo, string $query,int $limit, int $offset,string $order = 'id'): \PDOStatement{
    $query_limit = "";
    switch ($pdo->getAttribute(PDO::ATTR_DRIVER_NAME)){
        case 'sqlserv':
        case 'oci':
            $query_limit = "$query ORDER BY $order OFFSET :offset ROWS FETCH NEXT :limit ROWNS ONLY";
            break;
        default:
        $query_limit = "$query ORDER BY $order LIMIT :limit  OFFSET:offset";
        break;
    }
     $statement = $pdo->prepare($query_limit);
     $statement = bindValue('offset',(int) $offset, PDO::PARAM_INT);
     $statement = bindValue('limit',(int) $limit, PDO::PARAM_INT);
     return $statement;
}

$pagina = (isset($_REQUEST['pagina'])) ? $_REQUEST['pagina'] : 1;
$limit = 5;
$inicio = $pagina * $limit;
$offset = ($pagina-1)*$limit;

$query = "SELECT * FROM produtos  WHERE grupoProd ";
$query_total = $pdo->query("SELECT COUNT(*) FROM ($query) q");
$total = $query_total->fetchColumn();
$statement





?>