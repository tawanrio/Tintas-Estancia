
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

echo json_encode($dados);


$sql = $pdo->query("SELECT * FROM produtos WHERE descricao LIKE '%$dados%' ");

if($sql->rowCount() > 0){
    foreach($sql->fetchAll() as $value){
        echo $value['descricao']."<br>";
        
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

