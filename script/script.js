const nav = document.querySelector('.nav');
const navBusca = document.querySelector('#busca');
const navResp = document.querySelector('#resposta');
const navGuia = document.querySelector('.linha1');
const carList = document.querySelector('#contFiM');
var codigoFim;
var codigoLocal = [];
var retConfirm;
var codgL=[[],[],[],[],[]];
var confirm = new novoConfirm(); // cria novo confirm personalizado
var Alert = new novoAlert(); // Cria novo alert personalizado
var numeroTelefone = '5511958775934';
var mensagemWhats = 'Olá fiz a cotação atravez do sistema de auto atedimento, e gostaria de comprar os item a seguir!'

var codigoPhp ;


telaIni();

navBusca.style.display = 'none';
navResp.style.display = 'none';

 function btnVoltar(){
    criaElementoBtnVoltar('voltar','.nav');
    document.querySelector('#voltar').addEventListener('click', function(){
        telaIni();
    });
 }

function criaElementoBtn(nomeVar,nomeId,nomeClass,texto){
    var nomeVar = document.createElement("BUTTON");
    nomeVar.id=nomeId;
    nomeVar.className=nomeClass +' col-11 botao rounded-pill';
    nomeVar.innerHTML=texto;
    nav.insertAdjacentElement('beforeend', nomeVar);
    
}
function criaElementoBtnVoltar(nome,local){
    var nome = document.createElement("BUTTON");
    nome.id='voltar';
    nome.className='botao col-11  rounded-pill';
    nome.type="button";
    nome.innerHTML='Voltar';
    document.querySelector(local).insertAdjacentElement('beforeend', nome);
}

function criaElementoAll(tipo,local,nomeVar,nomeId,nomeClass,texto){
    var nomeVar = document.createElement(tipo);
    nomeVar.id=nomeId;
    nomeVar.className=nomeClass;
    nomeVar.innerHTML=texto;
    document.querySelector(local).insertAdjacentElement('beforeend', nomeVar);
}

function criaElementoEnviarWhats(){
    let conteudoEnviar ='';
    for(let i =0; i < codgL[0].length ; i++){
        conteudoEnviar += ' *'+codgL[0][i]+'-';
        conteudoEnviar += codgL[1][i]+'* , ';
        
    }
    criaElementoAll('div','.nav','div1','div1','div1 row ','');
    const enviarCont = document.createElemen't('a');
    enviarCont.href =`'https://api.whatsapp.com/send?phone=${numeroTelefone}&text=${mensagemWhats+' Lista de Compra: '+conteudoEnviar}`;
    enviarCont.id='enviarCont';
    enviarCont.target='_blank';
    if(codgL[0] == ''){
        enviarCont.className='enviarCont opacity-50 btn btn-secondary disabled row mt-4 text-center';
    }else{   
        enviarCont.className='enviarCont row mt-4 text-center';
    }
    enviarCont.innerHTML='<button class="botao enviarContBtn">Enviar</button>';
    document.querySelector('.div1').insertAdjacentElement('beforeend', enviarCont);
}
 function novoConfirm(){
            this.cod = function(texto, callback){


            const btnConfirmar = document.createElement("button");
            btnConfirmar.textContent = 'Confirmar';
            btnConfirmar.addEventListener('click',	function(){confirm.confirmar(callback)})
            btnConfirmar.className = 'botaoBox';
                    
            const btnCancelar = document.createElement("button");
            btnCancelar.textContent = 'Cancelar';
            btnCancelar.addEventListener('click', () => {confirm.cancelar(callback)})
            btnCancelar.className = 'botaoBox';
    
            novoConfirm = document.querySelector('#box');
            novoConfirm.style.left =  (window.innerWidth/2) - (500 * .5)+"px";
            novoConfirm.style.top = '250px';
            novoConfirm.style.display = 'block';
            document.querySelector('#box').style.display = 'block';
            document.querySelector('#boxHead').innerHTML = "ATENÇÃO";
            document.querySelector('#boxBody').innerHTML = texto;
            document.querySelector('#boxFoot').innerHTML = '';
            document.querySelector('#boxFoot').insertAdjacentElement("beforeend",btnConfirmar);
            document.querySelector('#boxFoot').insertAdjacentElement("beforeend",btnCancelar);
        }
        this.confirmar = function(callback){
            document.querySelector('#box').style.display = 'none';
            callback(retConfirm = true);
        }
        this.cancelar = function(callback){
            document.querySelector('#box').style.display = 'none';
            callback(retConfirm = false);
        }
    }

    function novoAlert(){
        this.cod = function(texto){
            novoAlert = document.querySelector('#box');
            novoAlert.style.left = (window.innerWidth/2) - (500 * .5)+"px";
            novoAlert.style.top = '250px';
            novoAlert.style.display = 'block';
            document.querySelector('#boxHead').innerHTML = "ATENÇÃO";
            document.querySelector('#boxBody').innerHTML = texto;
            document.querySelector('#boxFoot').innerHTML = '<button class="botaoBox" onclick="Alert.ok()">OK</button>'	
        }
        this.ok = function(){
            document.querySelector('#box').style.display = 'none';
        }
    }
   

function funCodigoLocal(codigoItem){
    
    codigoLocal.push(codigoItem);
    //console.log(codigoLocal);
    
}
function buscaItem(){
    codigoFim =[];
    for(let i = 0 ;i < codigoLocal.length; i++){
        codigoFim += codigoLocal[i];
    }
}


function remove(param){
    confirm.cod(`Deseja remover: ${codgL[2][codgL[0].indexOf(param)]} <br>da sua lista de compra?`, function(){
        if(retConfirm == true){
          
            let index = codgL[0].indexOf(param)
            if(index > -1){
                Alert.cod(`Item removido com sucesso!`);
                codgL[0].splice(index, 1);
                codgL[1].splice(index , 1);
                codgL[2].splice(index , 1);
                codgL[3].splice(index , 1);

            criaLista();

           // console.log(codgL[2]);
            }
        }});
  
} 
function chamaAltera(indice){
    let valor = codgL[1][indice];
    
    confirm.cod(`Alterar Quantidade?<br><button class="alter" onclick="altera(false,${indice})"><</button>  ${codgL[1][indice]}  
    <button class="alter" onclick="altera(true,${indice})">></button>`, function(){
        
        if(retConfirm == true){
            criaLista();
        }else{
            codgL[1][indice] = valor;
           
        }
    });
        
}
function altera(param,indice){
    if(param == true){
        codgL[1][indice] += 1;
        document.querySelector('#boxBody').innerHTML = `Alterar Quantidade?<br> <button class="alter" onclick="altera(false,${indice})">
        <</button>  ${codgL[1][indice]}  <button class="alter" onclick="altera(true,${indice})">></button> `;
    }else{
        if(codgL[1][indice] > 1){
        codgL[1][indice] -= 1;
        document.querySelector('#boxBody').innerHTML = `Alterar Quantidade?<br> <button class="alter" onclick="altera(false,${indice})">
        <</button>  ${codgL[1][indice]}  <button class="alter" onclick="altera(true,${indice})">></button>`;
        }
    }
}
function criaLista(){
            
        document.querySelector('#contFiM').innerHTML = '';
        criaElementoAll('div','#contFiM','descricaoList','descricaoList',' text-center  descricaoList col-6','<b>Descrição');
        criaElementoAll('div','#contFiM','unidadeList','unidadeList','unidadeList col-1','<b>Un');
        criaElementoAll('div','#contFiM','quantidadeList','quantidadeList','quantidadeList col-1','<b>Qnt');
        criaElementoAll('div','#contFiM','precoUnList','precoUnList','precoUnList col-2','<b>V.Unitario');
        criaElementoAll('div','#contFiM','precoTotList','precoTotList','precoTotList col-2','<b>V.Total');
        var precoFinal = 0;
        for (let i = 0; i < codgL[0].length; i++) {
            
            let totalUn =  codgL[4][i] * codgL[1][i];
            
            carList.style.display = 'flex';
            
            document.getElementById('descricaoList').innerHTML += `<div class='descList ' onclick='remove("${codgL[0][i]}")'>${codgL[2][i]}</div>`;
            document.getElementById('quantidadeList').innerHTML += `<div class='quantList text-center ' onclick='chamaAltera("${i}")'>${codgL[1][i]}</div>`;
            document.getElementById('unidadeList').innerHTML += `<div class="text-center ">${codgL[3][i]}</div>`;
            document.getElementById('precoUnList').innerHTML += `<div class="text-center ">${codgL[4][i]}</div>`;
            document.getElementById('precoTotList').innerHTML += `<div class="text-center ">${totalUn.toFixed(2)}</div>`;
            
            precoFinal +=  totalUn;
            precoFinal.toFixed(2);
                
           // console.log(precoFinal,typeof(precoFinal),totalUn);
        }
       
        criaElementoAll('div','#contFiM','totalList','totalList','totalList text-end fs-5 fst-italic fw-bolder"> col-4 offset-8 ',`Total: R$ ${precoFinal.toFixed(2)}`);
    
}

function sendRemove(){
  
    criaElementoEnviarWhats();
    criaElementoAll('button','.nav','limpaLista','limpaLista','limpaLista col-11 botao rounded-pill','Limpar Lista?');
    
    document.querySelector('#limpaLista').addEventListener('click', function(){
       
        confirm.cod(`Tem certeza que deseja limpar sua lista de compras?`, function(){
            
            if(retConfirm == true){
                codgL=[[],[],[],[],[]];
               
                telaIni();
                Alert.cod('Lista limpa com sucesso!');
          
            }});
    })
    btnVoltar();
}


function reset(){
    numPag=0;
    codigoLocal = [];
    codigoLocal =[''];
    carList.style.display = 'none';
    nav.innerHTML="";
    document.querySelector('#resposta').innerHTML='';
    document.querySelector('#voltarIni').innerHTML='';
    navGuia.innerHTML = '';
    navResp.innerHTML='';
}


function telaCarrinho(){
    if(codgL[0] == ''){
        Alert.cod('Não há produtos em sua lista');
          telaIni();
         
      }else{
    navGuia.innerHTML = 'Lista de Compra';
  //  console.log(codgL[2]);
   criaLista();
   sendRemove();

      }
}
function paginacao(){
     //variavel referente a paginação
     var numPag = 0;
     buscaItem();
    criaElementoAll('div','#voltarIni','anterior','anterior','next col-6 text-center ','← Anterior'); 

    criaElementoAll('div','#voltarIni','proximo','proximo','next col-6  text-center ','Proximo →'); 
    
    document.querySelector('#anterior').style.cssText='color:rgb(126, 73, 73);cursor:auto';

            document.querySelector('#anterior').addEventListener('click', function(){
            if (numPag >0) {
                numPag--;   
                if ((numPag-1)<0){
                    document.querySelector('#anterior').style.cssText='color:rgb(126, 73, 73);cursor:auto';
                    document.querySelector('#anterior').disabled = true;        
                }   
                document.querySelector('#proximo').style.cssText='color:black;cursor:pointer';
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
        }) 
        
        document.querySelector('#proximo').addEventListener('click', function(){
            if (((numPag+1)*6)<=limitpesq) {
                numPag++;
                if(((numPag+1)*6)>=limitpesq){
                    document.querySelector('#proximo').style.cssText='color:rgb(126, 73, 73);cursor:auto';
                    document.querySelector('#proximo').disabled = true;
                }
                document.querySelector('#anterior').style.cssText='color:black;cursor:pointer';
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
        });

}
function listaProd(){   
   
   paginacao();
        
    
    navResp.style.display = 'block';
    navBusca.style.display = 'block';
     criaElementoAll('table','.nav','table','tab','table  ','<td class="col-6 text-center"><b>Descricao</td><td class="col-3 text-center"><b>Unidade</td><td class="col-3 text-center"><b>Preço</td>');
         codigoPhp = JSON.stringify(codigoFim);
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
        criaElementoBtnVoltar('voltar','#voltarIni');
    
    document.querySelector('#voltar').addEventListener('click', function(){
        telaIni();
            });     
                    
    }
   

//insere item na lista
   function getItemList(codigo,descricao,unidade,preco){

     if(codgL[0].includes(codigo)){
        
        let valor = codgL[1][codgL[0].indexOf(codigo)];
    confirm.cod(`Alterar Quantidade?<br><button class="alter" onclick="altera(false,${codgL[0].indexOf(codigo)})"><</button>  ${codgL[1][codgL[0].indexOf(codigo)]}  
    <button class="alter" onclick="altera(true,${codgL[0].indexOf(codigo)})">></button>`, function(){
        
        if(retConfirm == true){
           
        }else{
            codgL[1][codgL[0].indexOf(codigo)] = valor;
           
        }
    });
                 
         } else {
            confirm.cod(`Deseja inserir o item: ${descricao}<br> à sua lista?`, function(){
                            
                if(retConfirm == true){
                   
                    codgL[0].push(codigo);                            
                    codgL[1].push(1); 
                    codgL[2].push(descricao); 
                    codgL[3].push(unidade); 
                    codgL[4].push(preco.replace(",",".")); 

                    confirm.cod(`Alterar Quantidade?<br><button class="alter" onclick="altera(false,${codgL[0].indexOf(codigo)})"><</button>  ${codgL[1][codgL[0].indexOf(codigo)]}  
                    <button class="alter" onclick="altera(true,${codgL[0].indexOf(codigo)})">></button>`, function(){
                        
                        if(retConfirm == true){ }});
                
                }else{
                    Alert.cod('Falha ao inserir o item à lista!');
                }
            });
            
        }  
        //console.log(codgL);   
   }  