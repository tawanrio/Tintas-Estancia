
<?php
include_once('conexao.php');






$usuario = $_POST['data'];

  $dados = json_decode($usuario, true);
 $i = 1;
$sql = $pdo->query("SELECT * FROM produtos  WHERE grupoProd LIKE '$dados'  ");
$sqlPg= $pdo->query("SELECT * FROM produtos  WHERE grupoProd LIKE '$dados' liMIT 7  ");
$count = $sql->rowCount();

$calculate =( $count/100)*7;




if($sql->rowCount() > 0){
    foreach($sql->fetchAll() as $value){
       
        ?>
        <div class=" ">
        
    <table class="col-12 resp ">
            <tr>      
              
                <td class="col-6 respd text-left"><?php echo $value['descricao'];?> </td>
                <td class="col-3 respd text-center"><?php echo $value['unidade'];?>  </td>
                <td class="col-3 respd text-center"><?php echo "R$ ".$value['preco'];?></td>
             
               

            
            </tr>
        </table>
        </div>
            
            
        
    <?php
    
    }
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

