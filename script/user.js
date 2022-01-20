
$(document).ready(function(){
    $(".collap").click(function(){  
        $(".offcanvas-body").html('');
        $.ajax({
            url: "PHP/clickAbreMenu.php",
            cache: false,
            type:'post',
            data:{'click': true},
            success: function (click) {
                $(".offcanvas-body").append(click);
            }
        });
        
    });
});
// function verificaLogin(logged){
//     if(logged){
//         telaAdm();
//     }else{
//         telaLogin();
//         validaForm();
//     }
// }
function telaLogin(){
    const login = `
<form class="text-center p-2 shadow  formNav rounded-3" method="post" id="formConsultarUsuario" >                           
    <input required class="col-12 mb-1" type="text" autocomplete="off" name="login" placeholder="Login"> 
    <input required class="col-12" type="password" name="pass" placeholder="Senha">
    <input class="formNavSubmit col-7 mt-1 btn btn-outline-dark" type="submit" id="btnConsultarUsuario" value="Entrar">
    <a class="row justify-content-center " href="#">Esqueceu a senha?</a>
</form>`;
    criaElementoAll({tipo:'div',local:'.offcanvas-body',nomevar:'login',nommclass:'login',texto:`${login}`});

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
function btnVoltarAdm(){

    criaElementoAll({tipo:'button',local:'#sectionButtonsAdm',nomeId:'voltar',nomeVar:'voltar',nomeClass:classBtnAdm,texto:'Voltar'});
    document.querySelector('#voltar').addEventListener('click', function(){
        telaIni();
        telaAdm();
            
    });
 }
function telaAdm(){
    telaIni();
    resetAdm();
    criaElementoAll({tipo:'button',local:'#sectionButtonsAdm',nomeId:'config',nomeVar:'configuracao',nomeClass:classBtnAdm,texto:'Configuração'});
    document.querySelector('#config').addEventListener('click', function(){
      telaConfig();
    });
   
}
function telaConfig(){
    reset();
    resetAdm();
    criaElementoAll({tipo:'button',local:'#sectionButtonsAdm',nomeId:'produtosConfig',nomeVar:'produtosConfig',nomeClass:classBtnAdm,texto:'Produtos'});
    criaElementoAll({tipo:'button',local:'#sectionButtonsAdm',nomeId:'usuariosConfig',nomeVar:'usuariosConfig',nomeClass:classBtnAdm,texto:'Úsuarios'});
    criaElementoAll({tipo:'button',local:'#sectionButtonsAdm',nomeId:'relatorios',nomeVar:'relatorios',nomeClass:classBtnAdm,texto:'Relatórios'});
    btnVoltarAdm();

    document.querySelector('#produtosConfig').addEventListener('click', function(){
        telaProdConfig();
      });

    //criaElementoBtn('relatorio','relatorio','botao  opacity-50 btn btn-secondary disabled','Outros');
    
}
function telaProdConfig(){
    resetAdm();
    criaElementoAll({tipo:'button',local:'#sectionButtonsAdm',nomeId:'cadastrarProd',nomeVar:'cadastrarProd',nomeClass:classBtnAdm,texto:'Cadastrar Produtos'});
    criaElementoAll({tipo:'button',local:'#sectionButtonsAdm',nomeId:'alterarProd',nomeVar:'alterarProd',nomeClass:classBtnAdm,texto:'Alterar Produtos'});

    btnVoltarAdm();
}
function resetAdm(){
    document.querySelector('#sectionButtonsAdm').innerHTML = '';
}


