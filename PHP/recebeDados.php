
<?php
$host = 'localhost';
$user = 'root';
$pass = '';

try {
    $pdo = new PDO("mysql:dbname=tintasestancia;host=$host",$user,$pass);
} catch (PDOException $er) {
    echo "ERRO COM O BANCO DE DADOS: ". $er->getMessage();
} catch(Exception $er){
    echo "ERRO GENERICO: ".$er->getMessage();
}   

$usuario = $_POST['data'];

  $dados = json_decode($usuario, true);
 
$sql = $pdo->query("SELECT * FROM produtos WHERE grupoProd LIKE '$dados' ");

if($sql->rowCount() > 0){
   
    foreach($sql->fetchAll() as $value){
        ?>
        <div class=" justify-content-md-center m-2">
        
    <table class="table table-bordered table-dark table-hover">
            <tr >      
               
                <td class="col text-left"><?php echo $value['descricao'];?> </td>
                <td class="col text-center"><?php echo $value['unidade'];?>  </td>
                <td class="col text-center"><?php echo "R$ ".$value['preco'];?></td>
                
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

