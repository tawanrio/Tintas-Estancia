<?php
include_once('conexao.php');

$usuario = isset($_POST['data']) ? $_POST['data']: 1;
$numPa =isset($_POST['numero']) ? $_POST['numero']: 'numpag vazio';

$dados = json_decode($usuario, true);
$paginaAtual = json_decode($numPa, true);

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

$limit = 6;
$numpag = $numPa;
$inicio = $numpag * $limit;
$offset = $inicio;



$query = "SELECT * FROM produtos  WHERE grupoProd LIKE '$dados'";
$query_total = $pdo->query("SELECT COUNT(*) FROM ($query) q");
$total = $query_total->fetchColumn();
$statement = limit($pdo, $query, $limit, $offset);
$produtos = $statement->execute();

?>
<script>
    <?php echo "var limitpesq = '$total';"; ?>
    
</script>
<?php

 while($produtos = $statement->fetch()){
       
        ?>
        <div class=" ">
        
    <table class="col-12 resp"  >
    <script>  </script>
            <tr onclick="getItemList('<?php echo $produtos['codigoL'] ?>','<?php echo $produtos['descricao'] ?>','<?php echo $produtos['unidade'] ?>','<?php echo $produtos['preco'] ?>')">      
           
                
                <td class="col-6 respd text-left"> <?php  echo $produtos['descricao'];  ?> </td>
                <td class="col-3 respd text-center"><?php echo $produtos['unidade'];?>  </td>
                <td class="col-3 respd text-center"><?php echo "R$ ".$produtos['preco'];?></td>
                               
            </tr>
        </table>
        </div>
          
        
    <?php
        
}




?>
