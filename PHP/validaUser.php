<?php
include_once('conexao.php');
session_start();

$validaUser = isset($_POST['login']) ? $_POST['login']: 1;
$validaPass = isset($_POST['pass']) ? $_POST['pass']: 1;

$query = "SELECT login,pass FROM usuarios WHERE login like '$validaUser' AND  pass = '$validaPass';";
$consulta = $pdo->query($query);
$resultado = $consulta->fetch();
 
if(!empty($resultado)){
    
    $_SESSION['user'] = $validaUser;
    $_SESSION['pass'] = $validaPass;
    $_SESSION['logged'] = true;
    //$status = isset($_SESSION['logged']);

    ?><script>
    <?php echo  'telaAdm();'  ?>
    </script><?php
  
}else{
?>
<script>
    <?php echo "verificaLogin();Alert.cod('ÚSUARIO OU SENHA INVALIDO!','.offcanvas-body');"; ?>
    
</script>
<?php
 }

