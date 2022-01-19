<?php
include_once('conexao.php');

$validaUser = isset($_POST['login']) ? $_POST['login']: 1;
$validaPass = isset($_POST['pass']) ? $_POST['pass']: 1;

//$query = "INSERT INTO usuarios (id,nome,email,senha) VALUE (DEFAULT,"
//echo $validaeUser;
$query = "SELECT * FROM usuarios WHERE login like '$validaUser' AND  pass = '$validaPass';";
//print_r($validaUser);  

$teste = $pdo->query($query);

$resultado = $teste->fetch();

 if(!empty($resultado)){
    ?>
<script>
    <?php echo "telaAdm();"; ?>
    
</script>
<?php
    }else{
        
?>
<script>
    <?php echo "telaNavBar();Alert.cod('Úsuario ou Senha inválido!','.offcanvas-body');"; ?>
    
</script>
<?php


 }
//echo $resultado . 'teste';
/*
while($resultado = $teste->fetch()){

    print_r($resultado['login']);
}



*/
?>