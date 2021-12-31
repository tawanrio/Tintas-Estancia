var ant = 0;

var pag = 7;
var tot='';
var limit = 500;


function alerta(){
    if (ant > 0 ) {
        ant --;
        tot = ant *pag;
 }else{
    tot = ant *pag;
 }
 console.log(ant);
var anterior = JSON.stringify(ant);

    $.ajax({
        url:"paginacao.php",
        type: 'post',
        data:{data: anterior},
        success: function(resposta){
            $("#teste").html(resposta);
        },     
        error: function(){
            $("#teste").html("Erro ajax");
        }
    });
    
}

function proximo(){
    
    if (ant <= limit ) {
        ant ++;
        tot = ant *pag;
 }else{
    tot = ant *pag;
 }
 console.log(ant);
    var anterior = JSON.stringify(ant);
    $.ajax({
        url:"paginacao.php",
        type: 'post',
        data:{data: anterior},
        success: function(resposta){
            $("#teste").html(resposta);
        },     
        error: function(){
            $("#teste").html("Erro ajax");
        }
    });
}  
