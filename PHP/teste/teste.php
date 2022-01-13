<?php 

$arr = array(1, 2, 3, 4);
foreach ($arr as &$valor) {
    $valor = $valor * 2;
}
// $arr agora é array(2, 4, 6, 8)

// sem um unset($valor), $valor continuará como referência ao último item: $arr[3]

foreach ($arr as $chave => $valor) {
    // $arr[3] será atualizado com cada valor de $arr...
    echo "{$chave} => {$valor} ";
  //  print_r($arr);
}