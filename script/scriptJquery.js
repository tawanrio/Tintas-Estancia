$(document).ready(function(){
    $("#buscar").click(function(){
        var form = new FormData($("#form")[0]);
        $.ajax({
            url: 'PHP/recebeDados.php',
            type: 'post',
            dataType: 'json',
            cache: false,
            processData: false,
            contentType: false,
            data: form,
            timeout: 8000,
            success: function(resultado){
             alert('asd');
             //   $("#resposta").html(resultado);
            }
        });

    });
});

