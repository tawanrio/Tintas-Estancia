<?php
session_start();

$click = isset($_POST['click']);
$status = isset($_SESSION['logged']);
if($click) {
   if($status){
    ?><script>
    <?php echo  'telaAdm();'  ?>
    </script><?php
   }else{
    ?><script>
    <?php echo  'telaLogin();'  ?>
    </script><?php
   }
  /*  ?><script>
        <?php echo  'verificaLogin('.$status.');'  ?>
    </script><?php*/
} else{
    echo "<br>erro no click do botao";
}

