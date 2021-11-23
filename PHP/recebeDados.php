
<?php
include_once('conexao.php');






$usuario = $_POST['data'];

$dados = json_decode($usuario, true);

//$sql = $pdo->query("SELECT * FROM produtos  WHERE grupoProd LIKE '$dados'");


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

$numpag = 0;

$limit = 7;
$inicio = $numpag * $limit;
$offset = $inicio;

$query = "SELECT * FROM produtos  WHERE grupoProd LIKE '$dados'";
$query_total = $pdo->query("SELECT COUNT(*) FROM ($query) q");
$total = $query_total->fetchColumn();
$statement = limit($pdo, $query, $limit, $offset);
$produtos = $statement->execute();


while($produtos = $statement->fetch()){

/*
if($sql->rowCount() > 0){
    foreach($sql->fetchAll() as $value){
      */
        ?>
        <div class=" ">
        
    <table class="col-12 resp ">
            <tr>      

                <td class="col-6 respd text-left"><?php echo $produtos['descricao'];?> </td>
                <td class="col-3 respd text-center"><?php echo $produtos['unidade'];?>  </td>
                <td class="col-3 respd text-center"><?php echo "R$ ".$produtos['id'];?></td>
                
                <!--    
                <td class="col-6 respd text-left"><?php //echo $value['descricao'];?> </td>
                <td class="col-3 respd text-center"><?php //echo $value['unidade'];?> </td>
                <td class="col-3 respd text-center"><?php // echo "R$ ".$value['preco'];?></td>
            -->
             

            
            </tr>
        </table>
        </div>
            
            
        
    <?php
    
    //}
}
/*
$pesquisa = $_POST['nome'];

var_dump($pesquisa);
$cmd = $pdo->prepare("SELECT * FROM produtos ");

$id = 1;

$cmd->execute();


while($resultado = $cmd->fetch(PDO::FETCH_ASSOC)){
    extract($resultado);
    $dados = "<table><tr>
        <td>$id</td>
        <td>$codigoL</td>
        <td>$descricao</td>
        <td>$preco</td>
    </tr> </table>";
    
    echo $dados;

}

    echo json_encode($dados);



        */

?>
