const login = `
<form class="text-center p-2 shadow  formNav rounded-3" method="post" id="formConsultarUsuario" >                           
    <input required class="col-12 mb-1" type="text" name="login" placeholder="Login"> 
    <input required class="col-12" type="password" name="pass" placeholder="Senha">
    <input class="formNavSubmit col-7 mt-1 btn btn-outline-dark" type="submit" id="btnConsultarUsuario" value="Entrar">
    <a class="row justify-content-center " href="#">Esqueceu a senha?</a>
</form>`;
function telaNavBar(){
    criaElementoAll('div','.offcanvas-body','login','login botao','login',login);
    validaForm();
    
}
function telaAdm(){
    criaElementoAll('div','.offcanvas-body','login','login botao','login','olá');
}
function resetTelaNavBar(){
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


