<?php
session_start();
$click = isset($_POST['click']);
$status = isset($_SESSION['logged']);
if($click) {
   
    ?><script>
        <?php echo  'verificaLogin('.$status.');'  ?>
    </script><?php
} else{
    echo "<br>erro no click do botao";
}

session_destroy();