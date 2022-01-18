<?php

/*
define("SERVIDOR","localhost");
define("USER", "root");
define("SENHA", "");
define("BANCO", "test");

 $conexao = new mysqli(SERVIDOR,USER,SENHA,BANCO);

if ($conexao->error){
    die("falha ao conectar o banco:".$conexao->error);
}
    

function inserirDados($codigoL,$descricao,$unidade,$preco){
        $conexao = new mysqli(SERVIDOR,USER,SENHA,BANCO);
        $sql = "INSERT INTO produtos (id,codigoL,descricao,unidade,preco)"
         ."values (default,'{$codigoL}','{$descricao}','{$unidade}','{$preco}')";
         
     $conexao->query($sql);
     $conexao->close();
 
 }*/
 
 $arq = scandir('listagem');

 $skipped = array('0', '1');



 foreach($arq as $arquivo => $value){
    

     //if (!empty($_FILES['arquivo[]']['tmp_name'])) {
         //$arquivo = new DOMDocument;
         if(in_array($arquivo ,$skipped)){
             continue;
             
             // print_r($xml);
            }
            $caminho = 'listagem/' . $value;
            print_r($caminho.'<br>');
            $xml = simplexml_load_file($caminho) or die('nao consegui abrir');
            print_r($xml);
        }
     //$arquivo->load($arq[2]);

  // $linhas = $arquivo->getElementsByTagName("det");

/*
   
   foreach($linhas as $linha){
    /*$nome = $linha->getElementsByTagName("Data")->item(0)->nodeValue;
    $email = $linha->getElementsByTagName("Data")->item(1)->nodeValue;

    echo $nome;
    echo $email;
    
      $codigoL = $linha->getElementsByTagName("cProd")->item(0)->nodeValue;
       $descricao = $linha->getElementsByTagName("xProd")->item(0)->nodeValue;
       $unidade = $linha->getElementsByTagName("qCom")->item(0)->nodeValue; 
       $preco = $linha->getElementsByTagName("vUnCom")->item(0)->nodeValue;

      
       //inserirDados($codigoL,$descricao,$unidade,$preco);
       //var_dump($codigoL,$descricao,$unidade,$preco);

       echo $codigoL.'<br>';
       echo $descricao.'<br>';
       echo $unidade.'<br>';
       echo 'R$ '.$preco.'<br>'.'<br>'.'<br>';

       
   }
   
//}

*/
#header("location:enviaTabela.html");
?>