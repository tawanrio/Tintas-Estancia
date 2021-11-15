const navProd = document.querySelector('.navProd');
const navServ = document.querySelector('.navServ');
const navOutr = document.querySelector('.navOutr');
const nav = document.querySelector('.nav');
const navForm = document.querySelector('#form');
var codigoFim;
var codigoLocal = [];
var buscar;
telaIni();


if (buscar == true) {
    nav.style.display = 'none';
    console.log(buscar);  
}
console.log(buscar);  
navForm.style.display = 'none';
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
    nome.innerHTML='Voltar';
    document.querySelector('.nav').insertAdjacentElement('beforeend', nome);
}
function criaElementoDiv(nomeVar,nomeId,nomeClass,texto){
    var nomeVar = document.createElement("div");
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
    codigoFim =0;
    for(let i = 0 ;i < codigoLocal.length; i++){
        codigoFim += codigoLocal[i];
    }
}
function telaIni(){

    criaElementoBtn('[produtos','prod','botao','Produtos');
    criaElementoBtn('servicos','serv','botao','Serviços');
    criaElementoBtn('outrs','outr','botao','Outros');

 
    document.querySelector('#prod').addEventListener('click', function(){
        nav.innerHTML="";
        telaProd();
        funCodigoLocal('1');
        //console.log(typeof(codigoLocal),codigoLocal);
    })   
}

function telaProd(){

    criaElementoBtn('imobiliario','imobi','botao','Imobiliario');
    criaElementoBtn('automotivo','autom','botao','Automotivo');
    criaElementoBtn('utensilio','utens','botao','Utensílio');
    criaElementoBtnVoltar('voltar');

        document.querySelector('#imobi').addEventListener('click', function(){
        nav.innerHTML="";
        funCodigoLocal('1');
        telaImobi();
       // console.log(codigoLocal);
        
    })
    document.querySelector('#autom').addEventListener('click', function(){
        nav.innerHTML="";
        funCodigoLocal('2');
        telaAutom();
      
        
    })
    document.querySelector('#utens').addEventListener('click', function(){
        nav.innerHTML="";
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
        funCodigoLocal('1');
        telaProdParede();
      
        
    })
    document.querySelector('#prodPiso').addEventListener('click', function(){
        nav.innerHTML="";
        funCodigoLocal('2');
        telaProdPiso();
        
    })
    document.querySelector('#prodTeto').addEventListener('click', function(){
        nav.innerHTML="";
        funCodigoLocal('3');
        telaProdParede();
       
    })
    document.querySelector('#prodFerro').addEventListener('click', function(){
        nav.innerHTML="";
        funCodigoLocal('4');
        telaProdFerro();
        
    })
    document.querySelector('#prodMadeira').addEventListener('click', function(){
        nav.innerHTML="";
        funCodigoLocal('5');
        telaProdMadeira();
     
    })
    document.querySelector('#voltar').addEventListener('click', function(){
        nav.innerHTML="";
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
        funCodigoLocal('1');
        telaPrimeiraSegundaLinha();
        
    })
    document.querySelector('#massaCo').addEventListener('click', function(){
        nav.innerHTML="";
        funCodigoLocal('2');
        telaPrimeiraSegundaLinha();
        
    })
    document.querySelector('#massaAc').addEventListener('click', function(){
        nav.innerHTML="";
        funCodigoLocal('3');
        telaPrimeiraSegundaLinha();
        
    })
    document.querySelector('#selador').addEventListener('click', function(){
        nav.innerHTML="";
        funCodigoLocal('4');
        telaPrimeiraSegundaLinha();
      
    })
    document.querySelector('#lixa').addEventListener('click', function(){
        nav.innerHTML="";
        funCodigoLocal('5');
        listaProd();
        
        
    }) 
    document.querySelector('#voltar').addEventListener('click', function(){
        nav.innerHTML="";
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
        funCodigoLocal('1');
        telaPrimeiraSegundaLinha();
      
    
    }) 
    document.querySelector('#rejunte').addEventListener('click', function(){
        nav.innerHTML="";
        funCodigoLocal('2');
        telaPrimeiraSegundaLinha();
               
    }) 
    document.querySelector('#limpaPiso').addEventListener('click', function(){
        nav.innerHTML="";
        funCodigoLocal('3');
        listaProd();
                
    }) 
    document.querySelector('#lixa').addEventListener('click', function(){
        nav.innerHTML="";
        funCodigoLocal('4');
        listaProd();
                
    }) 
    document.querySelector('#voltar').addEventListener('click', function(){
        nav.innerHTML="";
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
        funCodigoLocal('1');
        telaPrimeiraSegundaLinha();
        
    }) 
    document.querySelector('#zarcao').addEventListener('click', function(){
        nav.innerHTML="";
        funCodigoLocal('2');
        listaProd();
        
    }) 
    document.querySelector('#galvite').addEventListener('click', function(){
        nav.innerHTML="";
        listaProd();
        funCodigoLocal('3');
        
    }) 
    document.querySelector('#lixa').addEventListener('click', function(){
        nav.innerHTML="";
        funCodigoLocal('4');
        listaProd();
        
    }) 
    
    document.querySelector('#voltar').addEventListener('click', function(){
        nav.innerHTML="";
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
        telaPrimeiraSegundaLinha();
        funCodigoLocal('1');
        
    }) 
    document.querySelector('#verniz').addEventListener('click', function(){
        nav.innerHTML="";
        funCodigoLocal('2');
        telaPrimeiraSegundaLinha();
        
    }) 
    document.querySelector('#polisten').addEventListener('click', function(){
        nav.innerHTML="";
        telaPrimeiraSegundaLinha();
        codigoLocal.push('3');
        console.log(codigoLocal);
        
    }) 
    document.querySelector('#seladora').addEventListener('click', function(){
        nav.innerHTML="";
        funCodigoLocal('4');
        listaProd();
        
    }) 
    document.querySelector('#tingidor').addEventListener('click', function(){
        nav.innerHTML="";
        funCodigoLocal('5');
        listaProd();
        
    }) 
    document.querySelector('#betume').addEventListener('click', function(){
        nav.innerHTML="";
        funCodigoLocal('6');
        listaProd();
        
    }) 
    document.querySelector('#massaMadeira').addEventListener('click', function(){
        nav.innerHTML="";
        funCodigoLocal('7');
        listaProd();
        
    }) 
    document.querySelector('#lixa').addEventListener('click', function(){
        nav.innerHTML="";
        funCodigoLocal('8');
        listaProd();
     
        
    }) 

    document.querySelector('#voltar').addEventListener('click', function(){
        nav.innerHTML="";
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
        funCodigoLocal('1');
        listaProd();
              
    })
    document.querySelector('#linhaStand').addEventListener('click', function(){
        nav.innerHTML="";
        funCodigoLocal('2');
        listaProd();
                
    })
    
    document.querySelector('#voltar').addEventListener('click', function(){
        nav.innerHTML="";
        telaImobi();
        codigoLocal.pop();
        console.log(codigoLocal);
        
    })
}
function listaProd(){
  //  criaElementoDiv('listaProduto','listaProd','lista','Aqui será inserido a lista de produto');
    navForm.style.display = 'flex';
    if (buscar == false){
        buscar = true;   
        alert('buscar true');
        console.log(buscar);     
    }
    buscaItem();
    console.log(codigoFim);
   
  }


function btnVoltar(){
    buscaItem();
    console.log(codigoFim);
}

