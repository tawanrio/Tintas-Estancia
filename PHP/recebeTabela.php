<?php 

include 'conexao.php';


if (!empty($_FILES['arquivo']['tmp_name'])) {
   $arquivo = new DOMDocument;
   $arquivo->load($_FILES['arquivo']['tmp_name']);

   $linhas = $arquivo->getElementsByTagName("Row");

   foreach($linhas as $linha){
    /*$nome = $linha->getElementsByTagName("Data")->item(0)->nodeValue;
    $email = $linha->getElementsByTagName("Data")->item(1)->nodeValue;

    echo $nome;
    echo $email;
    */
      $codigoL = $linha->getElementsByTagName("Data")->item(0)->nodeValue;
       $descricao = $linha->getElementsByTagName("Data")->item(1)->nodeValue;
       $unidade = $linha->getElementsByTagName("Data")->item(2)->nodeValue;
       $preco = $linha->getElementsByTagName("Data")->item(4)->nodeValue;

      
       inserirDados($codigoL,$descricao,$unidade,$preco);

      # echo $codigoL.'<br>';
       #echo $descricao.'<br>';
       #echo $unidade.'<br>';
       //echo 'R$ '.$preco.'<br>'.'<br>'.'<br>';

       

   }
}


#header("location:enviaTabela.html");
?>