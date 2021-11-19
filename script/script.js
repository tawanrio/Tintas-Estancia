const navProd = document.querySelector('.navProd');
const navServ = document.querySelector('.navServ');
const navOutr = document.querySelector('.navOutr');
const nav = document.querySelector('.nav');
const navBusca = document.querySelector('#busca');
const navResp = document.querySelector('#resposta');
const navGuia = document.querySelector('.linha1');
var codigoFim;
var codigoLocal = [];
var buscar;

telaIni();
 

navBusca.style.display = 'none';
navResp.style.display = 'none';

function criaElementoBtn(nomeVar,nomeId,nomeClass,texto){
    var nomeVar = document.createElement("BUTTON");
    nomeVar.id=nomeId;
    nomeVar.className=nomeClass;
    nomeVar.innerHTML=texto;
    nav.insertAdjacentElement('beforeend', nomeVar);
    
}
function criaElementoBtnVoltar(nome){
    var nome = document.createElement("BUTTON");
    nome.id='voltar';
    nome.className='botao';
    nome.type="button";
    nome.innerHTML='Voltar';
    document.querySelector('.nav').insertAdjacentElement('beforeend', nome);
}
function criaElementoBtnVoltarBusca(nome){
    var nome = document.createElement("BUTTON");
    nome.id='voltar';
    nome.className='botao col-11 ';
    nome.type="button ";   
    nome.innerHTML='Voltar';
    document.querySelector('#voltarIni').insertAdjacentElement('beforeend', nome);
}

function criaElementoDiv(tipo,nomeVar,nomeId,nomeClass,texto){
    var nomeVar = document.createElement(tipo);
    nomeVar.id=nomeId;
    nomeVar.className=nomeClass;
    nomeVar.innerHTML=texto;
    nav.insertAdjacentElement('beforeend', nomeVar);
}
function funCodigoLocal(codigoItem){
    
    codigoLocal.push(codigoItem);
    console.log(codigoLocal);
    
}
function buscaItem(){
    codigoFim =[];
    for(let i = 0 ;i < codigoLocal.length; i++){
        codigoFim += codigoLocal[i];
    }
}

function telaIni(){

    nav.innerHTML="";
    document.querySelector('#resposta').innerHTML='';
    document.querySelector('#voltarIni').innerHTML='';

    criaElementoBtn('produtos','prod','botao','Produtos');
    criaElementoBtn('servicos','serv','botao opacity-50 btn btn-secondary disabled','Serviços');
    criaElementoBtn('outrs','outr','botao opacity-50 btn btn-secondary disabled','Outros');
  
    navGuia.innerHTML = '';
    document.querySelector('#prod').addEventListener('click', function(){
        nav.innerHTML="";
        navGuia.innerHTML = "Produtos";
        funCodigoLocal('1');
        telaProd();
        //console.log(typeof(codigoLocal),codigoLocal);
    }); 
}

function telaProd(){

    criaElementoBtn('imobiliario','imobi','botao','Imobiliario');
    criaElementoBtn('utensilio','utens','botao','Utensílio');
    criaElementoBtn('automotivo','autom','botao btn btn-secondary opacity-50 btn-lg disabled','Automotivo');
    criaElementoBtnVoltar('voltar');
    

        document.querySelector('#imobi').addEventListener('click', function(){
        nav.innerHTML="";
        navGuia.innerHTML = "Produtos>Imobiliario";
        funCodigoLocal('1');
        telaImobi();
  
        
    })
    document.querySelector('#autom').addEventListener('click', function(){
        nav.innerHTML="";
        navGuia.innerHTML = 'Produtos>Automotivo';
        funCodigoLocal('3');
        telaAutom();
      
        
    })
    document.querySelector('#utens').addEventListener('click', function(){
        nav.innerHTML="";
        navGuia.innerHTML = 'Produtos>Utensílio';
        funCodigoLocal('2');

        telaUtens();
        
    })
    document.querySelector('#voltar').addEventListener('click', function(){
        nav.innerHTML="";
        codigoLocal.pop();
        telaIni();
        console.log(codigoLocal);
        
    })
}

function telaImobi(){

    criaElementoBtn('prodParede','prodParede','botao','Produto para Parede');
    criaElementoBtn('prodPiso','prodPiso','botao','Produto para Piso');
    criaElementoBtn('prodTeto','prodTeto','botao','Produto para Teto');
    criaElementoBtn('prodFerro','prodFerro','botao','Produto para Ferro');
    criaElementoBtn('prodMadeira','prodMadeira','botao','Produto para Madeira');
    criaElementoBtnVoltar('voltar');

    document.querySelector('#prodParede').addEventListener('click', function(){
        nav.innerHTML="";
        navGuia.innerHTML = 'Produtos>Imobiliario>Parede';
        funCodigoLocal('1');
        telaProdParede();
      
        
    })
    document.querySelector('#prodPiso').addEventListener('click', function(){
        nav.innerHTML="";
        navGuia.innerHTML = 'Produtos>Imobiliario>Piso';
        funCodigoLocal('2');
        telaProdPiso();
        
    })
    document.querySelector('#prodTeto').addEventListener('click', function(){
        nav.innerHTML="";
        navGuia.innerHTML = 'Produtos>Imobiliario>Teto';
        funCodigoLocal('3');
        codigoLocal = [];
        codigoLocal =['1','1','1']
        
        telaProdParede();
       
    })
    document.querySelector('#prodFerro').addEventListener('click', function(){
        nav.innerHTML="";
        navGuia.innerHTML = 'Produtos>Imobiliario>Ferro';
        funCodigoLocal('4');
        telaProdFerro();
        
    })
    document.querySelector('#prodMadeira').addEventListener('click', function(){
        nav.innerHTML="";
        navGuia.innerHTML = 'Produtos>Imobiliario>Madeira';
        funCodigoLocal('5');
        telaProdMadeira();
     
    })
    document.querySelector('#voltar').addEventListener('click', function(){
        nav.innerHTML="";
        navGuia.innerHTML = 'Produtos';
        codigoLocal.pop();
        telaProd();
        console.log(codigoLocal);
        
    })
}

function telaProdParede(){

    criaElementoBtn('tintaParede','tintaPa','botao','Tinta');
    criaElementoBtn('massaCorrida','massaCo','botao','Massa Corrida');
    criaElementoBtn('massaAcrilica','massaAc','botao','Massa Acrílica');
    criaElementoBtn('selador','selador','botao','Selador Acrílico');
    criaElementoBtn('lixa','lixa','botao','Lixa');
    criaElementoBtnVoltar('voltar');

    document.querySelector('#tintaPa').addEventListener('click', function(){
        nav.innerHTML="";
        navGuia.innerHTML = 'Produtos>Imobiliario>Parede>Tinta';
        funCodigoLocal('1');
        telaInternoExterno();
        
    })
    document.querySelector('#massaCo').addEventListener('click', function(){
        nav.innerHTML="";
        navGuia.innerHTML = 'Produtos>Imobiliario>Parede>Massa-Corrida';
        funCodigoLocal('2');
        telaPrimeiraSegundaLinha();
        
    })
    document.querySelector('#massaAc').addEventListener('click', function(){
        nav.innerHTML="";
        navGuia.innerHTML = 'Produtos>Imobiliario>Parede>Massa-Acrilica';
        funCodigoLocal('3');
        telaPrimeiraSegundaLinha();
        
    })
    document.querySelector('#selador').addEventListener('click', function(){
        nav.innerHTML="";
        navGuia.innerHTML = 'Produtos>Imobiliario>Parede>Selador-Acrilico';
        funCodigoLocal('4');
        telaPrimeiraSegundaLinha();
      
    })
    document.querySelector('#lixa').addEventListener('click', function(){
        nav.innerHTML="";
        navGuia.innerHTML = 'Produtos>Imobiliario>Parede>Lixa';
        funCodigoLocal('5');
        listaProd();
        
        
    }) 
    document.querySelector('#voltar').addEventListener('click', function(){
        nav.innerHTML="";
        navGuia.innerHTML = 'Produtos>Imobiliario>';
        telaImobi();
        codigoLocal.pop();
        console.log(codigoLocal);
        
    })
}

function telaProdPiso(){
    
    criaElementoBtn('tintaPiso','tintaPiso','botao','Tinta Piso');
    criaElementoBtn('rejunte','rejunte','botao','Rejunte ');
    criaElementoBtn('limpaPiso','limpaPiso','botao','Limpa Piso ');
    criaElementoBtn('lixa','lixa','botao','Lixa');
    criaElementoBtnVoltar('voltar');

    document.querySelector('#tintaPiso').addEventListener('click', function(){
        nav.innerHTML="";
        navGuia.innerHTML = 'Produtos>Imobiliario>Piso>Tinta';
        funCodigoLocal('1');
        telaPrimeiraSegundaLinha();
      
    
    }) 
    document.querySelector('#rejunte').addEventListener('click', function(){
        nav.innerHTML="";
        navGuia.innerHTML = 'Produtos>Imobiliario>Piso>Rejunte';
        funCodigoLocal('2');
        listaProd();
               
    }) 
    document.querySelector('#limpaPiso').addEventListener('click', function(){
        nav.innerHTML="";
        navGuia.innerHTML = 'Produtos>Imobiliario>Piso>Limpa-Piso';
        funCodigoLocal('3');
        listaProd();
                
    }) 
    document.querySelector('#lixa').addEventListener('click', function(){
        nav.innerHTML="";
        navGuia.innerHTML = 'Produtos>Imobiliario>Piso>Lixa';
        codigoLocal = [];
        codigoLocal =['1','1','1','5']
        //funCodigoLocal('4');
        listaProd();
                
    }) 
    document.querySelector('#voltar').addEventListener('click', function(){
        nav.innerHTML="";
        navGuia.innerHTML = 'Produtos>Imobiliario';
        telaImobi();
        codigoLocal.pop();
        console.log(codigoLocal);
        
    })
}


function telaProdFerro(){
    criaElementoBtn('tintaFerro','tintaFerro','botao','Tinta Ferro');
    criaElementoBtn('zarcao','zarcao','botao','Zarcão');
    criaElementoBtn('galvite','galvite','botao','Galvite');
    criaElementoBtn('lixa','lixa','botao','Lixa');

    criaElementoBtnVoltar('voltar');

    document.querySelector('#tintaFerro').addEventListener('click', function(){
        nav.innerHTML="";
        navGuia.innerHTML = 'Produtos>Imobiliario>Ferro>Tinta';
        funCodigoLocal('1');
        telaPrimeiraSegundaLinha();
        
    }) 
    document.querySelector('#zarcao').addEventListener('click', function(){
        nav.innerHTML="";
        navGuia.innerHTML = 'Produtos>Imobiliario>Ferro>Zarcão';
        funCodigoLocal('2');
        listaProd();
        
    }) 
    document.querySelector('#galvite').addEventListener('click', function(){
        nav.innerHTML="";
        navGuia.innerHTML = 'Produtos>Imobiliario>Ferro>Galvite';
        listaProd();
        funCodigoLocal('3');
        
    }) 
    document.querySelector('#lixa').addEventListener('click', function(){
        nav.innerHTML="";
        navGuia.innerHTML = 'Produtos>Imobiliario>Ferro>Lixa';
        funCodigoLocal('4');
        listaProd();
        
    }) 
    
    document.querySelector('#voltar').addEventListener('click', function(){
        nav.innerHTML="";
        navGuia.innerHTML = 'Produtos>Imobiliario';
        codigoLocal.pop();
        console.log(codigoLocal);
        telaImobi();
        
    })

}
function telaProdMadeira(){
    criaElementoBtn('tintaMadeira','tintaMadeira','botao','Tinta Madeira');
    criaElementoBtn('verniz','verniz','botao','Verniz');
    criaElementoBtn('polisten','polisten','botao','Polisten');
    criaElementoBtn('seladora','seladora','botao','Seladora');
    criaElementoBtn('tingidor','tingidor','botao','Tingidor');
    criaElementoBtn('betume','betume','botao','Betume da Judeia');
    criaElementoBtn('massaMadeira','massaMadeira','botao','Massa para Madeira');
    criaElementoBtn('lixa','lixa','botao','Lixa');
    
    criaElementoBtnVoltar('voltar');
    document.querySelector('#tintaMadeira').addEventListener('click', function(){
        nav.innerHTML="";
        navGuia.innerHTML = 'Produtos>Imobiliario>Madeira>Tinta';
        funCodigoLocal('1');
        codigoLocal = [];
        codigoLocal =['1','1','4','1']
        telaPrimeiraSegundaLinha();
        
    }) 
    document.querySelector('#verniz').addEventListener('click', function(){
        nav.innerHTML="";
        navGuia.innerHTML = 'Produtos>Imobiliario>Madeira>Verniz';
        funCodigoLocal('2');
        listaProd();
        
    }) 
    document.querySelector('#polisten').addEventListener('click', function(){
        nav.innerHTML="";
        navGuia.innerHTML = 'Produtos>Imobiliario>Madeira>Polisten';
        funCodigoLocal('3');
        listaProd();
       
        
    }) 
    document.querySelector('#seladora').addEventListener('click', function(){
        nav.innerHTML="";
        navGuia.innerHTML = 'Produtos>Imobiliario>Madeira>Seladora-Madeira';
        funCodigoLocal('4');
        listaProd();
        
    }) 
    document.querySelector('#tingidor').addEventListener('click', function(){
        nav.innerHTML="";
        navGuia.innerHTML = 'Produtos>Imobiliario>Madeira>Tingidor';
        funCodigoLocal('5');
        listaProd();
        
    }) 
    document.querySelector('#betume').addEventListener('click', function(){
        nav.innerHTML="";
        navGuia.innerHTML = 'Produtos>Imobiliario>Madeira>Betume';
        funCodigoLocal('6');
        listaProd();
        
    }) 
    document.querySelector('#massaMadeira').addEventListener('click', function(){
        nav.innerHTML="";
        navGuia.innerHTML = 'Produtos>Imobiliario>Madeira>Massa-Madeira';
        funCodigoLocal('7');
        listaProd();
        
    }) 
    document.querySelector('#lixa').addEventListener('click', function(){
        nav.innerHTML="";
        navGuia.innerHTML = 'Produtos>Imobiliario>Madeira>Lixa';
       // funCodigoLocal('8');
       codigoLocal = [];
        codigoLocal =['1','1','1','5'];
        listaProd();
     
        
    }) 

    document.querySelector('#voltar').addEventListener('click', function(){
        nav.innerHTML="";
        navGuia.innerHTML = 'Produtos>Imobiliario';
        telaImobi();
        codigoLocal.pop();
        console.log(codigoLocal);
        
    })

}

function telaPrimeiraSegundaLinha(){

    criaElementoBtn('linhaPremium','linhaPrem','botao','Primeira Linha');
    criaElementoBtn('linhaStand','linhaStand','botao','Segunda Linha');
    criaElementoBtnVoltar('voltar');
 
    document.querySelector('#linhaPrem').addEventListener('click', function(){
        nav.innerHTML="";
        navGuia.innerHTML += '>Primeira-Linha';
        funCodigoLocal('1');
        listaProd();
              
    })
    document.querySelector('#linhaStand').addEventListener('click', function(){
        nav.innerHTML="";
        navGuia.innerHTML += '>Segunda-Linha';
        funCodigoLocal('2');
        listaProd();
                
    })
    
    document.querySelector('#voltar').addEventListener('click', function(){
        nav.innerHTML="";
        navGuia.innerHTML = 'Produtos';
        codigoLocal = [];
        codigoLocal =['1'];
        telaProd();
        console.log(codigoLocal);
        
    })
}
function telaInternoExterno(){
 
    criaElementoBtn('interno','interno','botao','Interno');
    criaElementoBtn('externo','externo','botao','Externo');
    criaElementoBtnVoltar('voltar');

    document.querySelector('#interno').addEventListener('click', function(){
        nav.innerHTML="";
        navGuia.innerHTML += '>Interno';
        funCodigoLocal('1');
        telaPrimeiraSegundaLinha();
                
    })
    document.querySelector('#externo').addEventListener('click', function(){
        nav.innerHTML="";
        navGuia.innerHTML += '>Externo';
        funCodigoLocal('2');
        telaPrimeiraSegundaLinha();
                
    })

    document.querySelector('#voltar').addEventListener('click', function(){
        nav.innerHTML="";
        navGuia.innerHTML = 'Produtos';
        telaProd();
        codigoLocal = [];
        codigoLocal =['1'];
        console.log(codigoLocal);
        
    })
} 


function listaProd(){
              criaElementoBtnVoltarBusca('voltar');

              document.querySelector('#voltar').addEventListener('click', function(){
                nav.innerHTML="";
                document.querySelector('#resposta').innerHTML='';
                document.querySelector('#voltarIni').innerHTML='';
                navGuia.innerHTML = '';
                telaIni();
                codigoLocal = [];
                console.log(codigoLocal);
                
            })
    buscaItem();
    navResp.style.display = 'block';
    navBusca.style.display = 'block';
     criaElementoDiv('table','table','tab','table table-bordered font-weight-bold table-dark table-hover','<td class="col-8  text-center">Descricao</td><td class="col-2 text-center">Unidade</td><td class="col-3 text-center">Preço</td>');
        var codigoPhp = JSON.stringify(codigoFim);
      
            $.ajax({
                url:"PHP/recebeDados.php",
               type: 'post',
               data:{data: codigoPhp},
               success: function(resposta){
                $("#resposta").html(resposta);
            },     
            error: function(){
                $("#resposta").html("Erro ajax");
            }
            });
           
                        
    }
 
   
function btnVoltar(){
    buscaItem();
    console.log(codigoFim);
}

