

function telaIni(){
    reset();

    criaElementoBtn('produtos','prod','botao ','Produtos');
    criaElementoBtn('servicos','serv','botao   col-5opacity-50 btn btn-secondary disabled','Serviços');
    criaElementoBtn('outrs','outr','botao  opacity-50 btn btn-secondary disabled','Outros');
    criaElementoBtn('carrinho','carrinho','botao ','Lista de Compras');

    document.querySelector('#prod').addEventListener('click', function(){
        sectionButtons.innerHTML="";
        //nav2.innerHTML="";
        navGuia.innerHTML = "Produtos";
        funCodigoLocal('1');
        telaProd();
       
    }); 
    document.querySelector('#carrinho').addEventListener('click', function(){
        sectionButtons.innerHTML="";
        //nav2.innerHTML="";
      
        funCodigoLocal('4');
        telaCarrinho();
       
    }); 
}

function telaProd(){

    criaElementoBtn('imobiliario','imobi','botao ','Imobiliario');
    criaElementoBtn('utensilio','utens','botao   opacity-50 btn btn-secondary disabled','Utensílio');
    criaElementoBtn('automotivo','autom','botao  btn btn-secondary opacity-50 btn-lg disabled','Automotivo');
    
    
        document.querySelector('#imobi').addEventListener('click', function(){
        sectionButtons.innerHTML="";
        //nav2.innerHTML="";
        navGuia.innerHTML = "Produtos>Imobiliario";
        funCodigoLocal('1');
        telaImobi();
  
    })
    document.querySelector('#autom').addEventListener('click', function(){
        sectionButtons.innerHTML="";
        //nav2.innerHTML="";
        navGuia.innerHTML = 'Produtos>Automotivo';
        funCodigoLocal('3');
        telaAutom();
      
    })
    document.querySelector('#utens').addEventListener('click', function(){
        sectionButtons.innerHTML="";
        //nav2.innerHTML="";
        navGuia.innerHTML = 'Produtos>Utensílio';
        funCodigoLocal('2');
        telaUtens();
     
    })
    btnVoltar();
}

function telaImobi(){

    criaElementoBtn('prodParede','prodParede','botao ','Produto para Parede');
    criaElementoBtn('prodPiso','prodPiso','botao ','Produto para Piso');
    criaElementoBtn('prodTeto','prodTeto','botao ','Produto para Teto');
    criaElementoBtn('prodFerro','prodFerro','botao ','Produto para Ferro');
    criaElementoBtn('prodMadeira','prodMadeira','botao ','Produto para Madeira');
    btnVoltar()

    document.querySelector('#prodParede').addEventListener('click', function(){
        sectionButtons.innerHTML="";
        //nav2.innerHTML="";
        navGuia.innerHTML = 'Produtos>Imobiliario>Parede';
        funCodigoLocal('1');
        telaProdParede();
      
        
    })
    document.querySelector('#prodPiso').addEventListener('click', function(){
        sectionButtons.innerHTML="";
        //nav2.innerHTML="";
        navGuia.innerHTML = 'Produtos>Imobiliario>Piso';
        funCodigoLocal('2');
        telaProdPiso();
        
    })
    document.querySelector('#prodTeto').addEventListener('click', function(){
        sectionButtons.innerHTML="";
        //nav2.innerHTML="";
        navGuia.innerHTML = 'Produtos>Imobiliario>Teto';
        funCodigoLocal('3');
        codigoLocal = [];
        codigoLocal =['1','1','1']
        telaProdParede();       
    })
    document.querySelector('#prodFerro').addEventListener('click', function(){
        sectionButtons.innerHTML="";
        //nav2.innerHTML="";
        navGuia.innerHTML = 'Produtos>Imobiliario>Ferro';
        funCodigoLocal('4');
        telaProdFerro();
        
    })
    document.querySelector('#prodMadeira').addEventListener('click', function(){
        sectionButtons.innerHTML="";
        //nav2.innerHTML="";
        navGuia.innerHTML = 'Produtos>Imobiliario>Madeira';
        funCodigoLocal('5');
        telaProdMadeira();
     
    })

   
}

function telaProdParede(){

    criaElementoBtn('tintaParede','tintaPa','botao ','Tinta');
    criaElementoBtn('massaCorrida','massaCo','botao ','Massa Corrida');
    criaElementoBtn('massaAcrilica','massaAc','botao ','Massa Acrílica');
    criaElementoBtn('selador','selador','botao ','Selador Acrílico');
    criaElementoBtn('lixa','lixa','botao ','Lixa');
    btnVoltar()

    document.querySelector('#tintaPa').addEventListener('click', function(){
        sectionButtons.innerHTML="";
        //nav2.innerHTML="";
        navGuia.innerHTML = 'Produtos>Imobiliario>Parede>Tinta';
        funCodigoLocal('1');
        telaInternoExterno();
        
    })
    document.querySelector('#massaCo').addEventListener('click', function(){
        sectionButtons.innerHTML="";
        //nav2.innerHTML="";
        navGuia.innerHTML = 'Produtos>Imobiliario>Parede>Massa-Corrida';
        funCodigoLocal('2');
        telaPrimeiraSegundaLinha();
        
    })
    document.querySelector('#massaAc').addEventListener('click', function(){
        sectionButtons.innerHTML="";
        //nav2.innerHTML="";
        navGuia.innerHTML = 'Produtos>Imobiliario>Parede>Massa-Acrilica';
        funCodigoLocal('3');
        telaPrimeiraSegundaLinha();
        
    })
    document.querySelector('#selador').addEventListener('click', function(){
        sectionButtons.innerHTML="";
        //nav2.innerHTML="";
        navGuia.innerHTML = 'Produtos>Imobiliario>Parede>Selador-Acrilico';
        funCodigoLocal('4');
        telaPrimeiraSegundaLinha();
      
    })
    document.querySelector('#lixa').addEventListener('click', function(){
        sectionButtons.innerHTML="";
        //nav2.innerHTML="";
        navGuia.innerHTML = 'Produtos>Imobiliario>Parede>Lixa';
        funCodigoLocal('5');
        listaProd();
        
        
    }) 
  
}

function telaProdPiso(){
    
    criaElementoBtn('tintaPiso','tintaPiso','botao ','Tinta Piso');
    criaElementoBtn('rejunte','rejunte','botao ','Rejunte ');
    criaElementoBtn('limpaPiso','limpaPiso','botao ','Limpa Piso ');
    criaElementoBtn('lixa','lixa','botao ','Lixa');
    btnVoltar()

    document.querySelector('#tintaPiso').addEventListener('click', function(){
        sectionButtons.innerHTML="";
        //nav2.innerHTML="";
        navGuia.innerHTML = 'Produtos>Imobiliario>Piso>Tinta';
        funCodigoLocal('1');
        telaPrimeiraSegundaLinha();
      
    
    }) 
    document.querySelector('#rejunte').addEventListener('click', function(){
        sectionButtons.innerHTML="";
        //nav2.innerHTML="";
        navGuia.innerHTML = 'Produtos>Imobiliario>Piso>Rejunte';
        funCodigoLocal('2');
        listaProd();
               
    }) 
    document.querySelector('#limpaPiso').addEventListener('click', function(){
        sectionButtons.innerHTML="";
        //nav2.innerHTML="";
        navGuia.innerHTML = 'Produtos>Imobiliario>Piso>Limpa-Piso';
        funCodigoLocal('3');
        listaProd();
                
    }) 
    document.querySelector('#lixa').addEventListener('click', function(){
        sectionButtons.innerHTML="";
        //nav2.innerHTML="";
        navGuia.innerHTML = 'Produtos>Imobiliario>Piso>Lixa';
        codigoLocal = [];
        codigoLocal =['1','1','1','5']
        //funCodigoLocal('4');
        listaProd();
                
    }) 
   
}


function telaProdFerro(){
    criaElementoBtn('tintaFerro','tintaFerro','botao ','Tinta Ferro');
    criaElementoBtn('zarcao','zarcao','botao ','Zarcão');
    criaElementoBtn('galvite','galvite','botao ','Galvite');
    criaElementoBtn('lixa','lixa','botao ','Lixa');

    btnVoltar()

    document.querySelector('#tintaFerro').addEventListener('click', function(){
        sectionButtons.innerHTML="";
        //nav2.innerHTML="";
        navGuia.innerHTML = 'Produtos>Imobiliario>Ferro>Tinta';
        funCodigoLocal('1');
        telaPrimeiraSegundaLinha();
        
    }) 
    document.querySelector('#zarcao').addEventListener('click', function(){
        sectionButtons.innerHTML="";
        //nav2.innerHTML="";
        navGuia.innerHTML = 'Produtos>Imobiliario>Ferro>Zarcão';
        funCodigoLocal('2');
        listaProd();
        
    }) 
    document.querySelector('#galvite').addEventListener('click', function(){
        sectionButtons.innerHTML="";
        //nav2.innerHTML="";
        navGuia.innerHTML = 'Produtos>Imobiliario>Ferro>Galvite';
        listaProd();
        funCodigoLocal('3');
        
    }) 
    document.querySelector('#lixa').addEventListener('click', function(){
        sectionButtons.innerHTML="";
        //nav2.innerHTML="";
        navGuia.innerHTML = 'Produtos>Imobiliario>Ferro>Lixa';
        funCodigoLocal('4');
        listaProd();
        
    }) 
    

}
function telaProdMadeira(){
    criaElementoBtn('tintaMadeira','tintaMadeira','botao ','Tinta Madeira');
    criaElementoBtn('verniz','verniz','botao ','Verniz');
    criaElementoBtn('polisten','polisten','botao ','Polisten');
    criaElementoBtn('seladora','seladora','botao ','Seladora');
    criaElementoBtn('tingidor','tingidor','botao ','Tingidor');
    criaElementoBtn('betume','betume','botao ','Betume da Judeia');
    criaElementoBtn('massaMadeira','massaMadeira','botao ','Massa para Madeira');
    criaElementoBtn('lixa','lixa','botao ','Lixa');
    
    btnVoltar()
    document.querySelector('#tintaMadeira').addEventListener('click', function(){
        sectionButtons.innerHTML="";
        //nav2.innerHTML="";
        navGuia.innerHTML = 'Produtos>Imobiliario>Madeira>Tinta';
        funCodigoLocal('1');
        codigoLocal = [];
        codigoLocal =['1','1','4','1']
        telaPrimeiraSegundaLinha();
        
    }) 
    document.querySelector('#verniz').addEventListener('click', function(){
        sectionButtons.innerHTML="";
        //nav2.innerHTML="";
        navGuia.innerHTML = 'Produtos>Imobiliario>Madeira>Verniz';
        funCodigoLocal('2');
        listaProd();
        
    }) 
    document.querySelector('#polisten').addEventListener('click', function(){
        sectionButtons.innerHTML="";
        //nav2.innerHTML="";
        navGuia.innerHTML = 'Produtos>Imobiliario>Madeira>Polisten';
        funCodigoLocal('3');
        listaProd();
       
        
    }) 
    document.querySelector('#seladora').addEventListener('click', function(){
        sectionButtons.innerHTML="";
        //nav2.innerHTML="";
        navGuia.innerHTML = 'Produtos>Imobiliario>Madeira>Seladora-Madeira';
        funCodigoLocal('4');
        listaProd();
        
    }) 
    document.querySelector('#tingidor').addEventListener('click', function(){
        sectionButtons.innerHTML="";
        //nav2.innerHTML="";
        navGuia.innerHTML = 'Produtos>Imobiliario>Madeira>Tingidor';
        funCodigoLocal('5');
        listaProd();
        
    }) 
    document.querySelector('#betume').addEventListener('click', function(){
        sectionButtons.innerHTML="";
        //nav2.innerHTML="";
        navGuia.innerHTML = 'Produtos>Imobiliario>Madeira>Betume';
        funCodigoLocal('6');
        listaProd();
        
    }) 
    document.querySelector('#massaMadeira').addEventListener('click', function(){
        sectionButtons.innerHTML="";
        //nav2.innerHTML="";
        navGuia.innerHTML = 'Produtos>Imobiliario>Madeira>Massa-Madeira';
        funCodigoLocal('7');
        listaProd();
        
    }) 
    document.querySelector('#lixa').addEventListener('click', function(){
        sectionButtons.innerHTML="";
        //nav2.innerHTML="";
        navGuia.innerHTML = 'Produtos>Imobiliario>Madeira>Lixa';
       // funCodigoLocal('8');
       codigoLocal = [];
        codigoLocal =['1','1','1','5'];
        listaProd();
     
        
    }) 

   

}

function telaPrimeiraSegundaLinha(){

    criaElementoBtn('linhaPremium','linhaPrem','botao ','Primeira Linha');
    criaElementoBtn('linhaStand','linhaStand','botao ','Segunda Linha');
    btnVoltar();
 
    document.querySelector('#linhaPrem').addEventListener('click', function(){
        sectionButtons.innerHTML="";
        //nav2.innerHTML="";
        navGuia.innerHTML += '>Primeira-Linha';
        funCodigoLocal('1');
        listaProd();
              
    })
    document.querySelector('#linhaStand').addEventListener('click', function(){
        sectionButtons.innerHTML="";
        //nav2.innerHTML="";
        navGuia.innerHTML += '>Segunda-Linha';
        funCodigoLocal('2');
        listaProd();
                
    })
    
  
}
function telaInternoExterno(){
 
    criaElementoBtn('interno','interno','botao ','Interno');
    criaElementoBtn('externo','externo','botao ','Externo');
    btnVoltar()

    document.querySelector('#interno').addEventListener('click', function(){
        sectionButtons.innerHTML="";
        //nav2.innerHTML="";
        navGuia.innerHTML += '>Interno';
        funCodigoLocal('1');
        telaPrimeiraSegundaLinha();
                
    })
    document.querySelector('#externo').addEventListener('click', function(){
        sectionButtons.innerHTML="";
        //nav2.innerHTML="";
        navGuia.innerHTML += '>Externo';
        funCodigoLocal('2');
        telaPrimeiraSegundaLinha();
                
    })

   
} 
