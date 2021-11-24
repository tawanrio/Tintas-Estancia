
 function reqAjax(){

     $.ajax({
         url:"PHP/recebeDados.php",
         type: 'post',
         data:{data: codigoPhp,
            numero: numPag},
            success: function(resposta){
                $("#resposta").html(resposta);
            },     
            error: function(){
                $("#resposta").html("Erro ajax");
            }
        });
    }