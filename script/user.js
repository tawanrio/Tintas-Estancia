
$(document).ready(function(){
    $(".collap").click(function(){  
        $(".offcanvas-body").html('');
        $.ajax({
            url: "PHP/teste.php",
            cache: false,
            type:'post',
            data:{'click': true},
            success: function (click) {
                $(".offcanvas-body").append(click);
            }
        });
        
    });
});
function verificaLogin(logged){
  
    if(logged){
        telaAdm();
    }else{
        telaLogin();
        validaForm();
    }
}
function telaLogin(){
    const login = `
<form class="text-center p-2 shadow  formNav rounded-3" method="post" id="formConsultarUsuario" >                           
    <input required class="col-12 mb-1" type="text" autocomplete="off" name="login" placeholder="Login"> 
    <input required class="col-12" type="password" name="pass" placeholder="Senha">
    <input class="formNavSubmit col-7 mt-1 btn btn-outline-dark" type="submit" id="btnConsultarUsuario" value="Entrar">
    <a class="row justify-content-center " href="#">Esqueceu a senha?</a>
</form>`;
    criaElementoAll('div','.offcanvas-body','login','login','login',login);
}
function telaAdm(){
    criaElementoAll('div','.offcanvas-body','login','login','login','está informação e restrita!');
}
function resetTelaMenu(){
   document.querySelector('.offcanvas-body').innerHTML = '';
    
}

function validaForm(){
    $("#formConsultarUsuario").submit(function () {
        //var formUser = new FormData($('#formConsultarUsuario')[0]);
        var formUser = jQuery(this).serialize();
        $.ajax({
            url: "PHP/validaUser.php",
            cache: false,
            type:'post',
            data: formUser,
            success: function (consulta) {
                $(".offcanvas-body").empty();
                $(".offcanvas-body").append(consulta);
                //    $("#sectionButtons").html(consulta);
                
            }
        });
        return false;
        
    });
}


