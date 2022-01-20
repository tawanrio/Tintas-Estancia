const sectionButtons = document.querySelector('#sectionButtons');
const navBusca = document.querySelector('#busca');
//const navResp = document.querySelector('#resposta');
const navGuia = document.querySelector('.linha1');
const carList = document.querySelector('#contFiM');
var codigoFim;
var codigoLocal = [];
var retConfirm;
var codgL=[[],[],[],[],[]];
var confirm = new novoConfirm(); // cria novo confirm personalizado
var Alert = new novoAlert(); // Cria novo alert personalizado
var classBtn= 'botao col-md-10 col-sm-10 rounded-pill';
var classBtnAdm ='botaoAdm col-md-10 col-sm-10 rounded-pill';
var codigoPhp ;



telaIni();

navBusca.style.display = 'none';
//navResp.style.display = 'none';

 function btnVoltar(){
    criaElementoBtnVoltar('voltar','#sectionButtons');
    document.querySelector('#voltar').addEventListener('click', function(){
        telaIni();
            
    });
 }

function criaElementoBtn(nomeVar,nomeId,nomeClass,texto){
    var nomeVar = document.createElement("BUTTON");
    nomeVar.id=nomeId;
    nomeVar.className=nomeClass + classBtn;
    nomeVar.innerHTML=texto;
    sectionButtons.insertAdjacentElement('beforeend', nomeVar);
    
}

function criaElementoBtnVoltar(nome,local){
    var nome = document.createElement("BUTTON");
    nome.id='voltar';
    nome.className=classBtn;
    nome.style.display = 'block';
    nome.type="button";
    nome.innerHTML='Voltar';
    document.querySelector(local).insertAdjacentElement('beforeend', nome);
}

function criaElementoAll({tipo,local,nomeVar,nomeId,nomeClass,texto}){
//function criaElementoAll(tipo,local,nomeVar,nomeId,nomeClass,texto){
    var nomeVar = document.createElement(tipo);
    nomeVar.id=nomeId;
    nomeVar.className=nomeClass;
    nomeVar.innerHTML=texto;
    document.querySelector(local).insertAdjacentElement('beforeend', nomeVar);
}

function criaElementoEnviarWhats(){
    let conteudoEnviar ='';
    for(let i =0; i < codgL[0].length ; i++){
        conteudoEnviar += codgL[0][i]+'%0A';
        conteudoEnviar += codgL[3][i]+'- ';
        conteudoEnviar += codgL[2][i]+'%0A';
        conteudoEnviar += codgL[1][i]+' Unidade,%0A%0A';
      
        
    }

  
    //criaElementoAll('div','#sectionButtons','div1','div1','div1 row ','');
    const enviarCont = document.createElement('a');
    enviarCont.href =`https://api.whatsapp.com/send?phone=5511985373835&text=${'Lista de compra:%0A'+conteudoEnviar}`;

    enviarCont.id='enviarCont';
    enviarCont.target='_blank';
    enviarCont.className='enviarCont row col-md-5 col-sm-10 mt-md-4 mt-sm-3';
    
    enviarCont.innerHTML='<button class="botao  enviarContBtn">Enviar</button>';
    document.querySelector('#sectionButtons').insertAdjacentElement('beforeend', enviarCont);
}
function sendRemove(){
  
    criaElementoEnviarWhats();
   //a gambiarra abaixo serve somente pra deixa o botão igual ao elemento de cima 
    criaElementoAll({tipo:'a',local:'#sectionButtons',nomeVar:'limpaLista',nomeId:'limpaLista',nomeClass:'enviarCont row col-md-5 col-sm-10 mt-md-4 ',texto:'<button class="botao  enviarContBtn">Limpar Lista?</button>'});
    btnVoltar();
    
    document.querySelector('#limpaLista').addEventListener('click', function(){
       
        confirm.cod(`Tem certeza que deseja limpar sua lista de compras?`,'.telaHome', function(){
            
            if(retConfirm == true){
                codgL=[[],[],[],[],[]];
               
                telaIni();
                Alert.cod('Lista limpa com sucesso!','.telaHome');
          
            }});
    })
}

 function novoConfirm() {
     this.cod = function (texto, local, callback) {
        criaElementoAll({tipo:'div',local:local, nomeVar:'box',nomeId:'box',nomeClass:'box col-10',texto:''});
        criaElementoAll({tipo:'div',local:'#box',nomeVar:'boxHead',nomeId:'boxHead',nomeClass:'boxHead',texto:''});
        criaElementoAll({tipo:'div',local:'#box',nomeVar:'boxBody',nomeId:'boxBody',nomeClass:'boxBody',texto:''});
        criaElementoAll({tipo:'div',local:'#box',nomeVar:'boxFoot',nomeId:'boxFoot',nomeClass:'boxFoot',texto:''});

         const btnConfirmar = document.createElement("button");
         btnConfirmar.textContent = 'Confirmar';
         btnConfirmar.className = 'botaoBox';
         btnConfirmar.addEventListener('click', function () {
             confirm.confirmar(callback)
         })
         const btnCancelar = document.createElement("button");
         btnCancelar.textContent = 'Cancelar';
         btnCancelar.className = 'botaoBox';
         btnCancelar.addEventListener('click', () => {
             confirm.cancelar(callback)
         })

         novoConfirm = document.querySelector('#box');
         novoConfirm.style.top = '20%';
         novoConfirm.style.display = 'block';
         document.querySelector('#box').style.display = 'block';
         document.querySelector('#boxHead').innerHTML = "ATENÇÃO";
         document.querySelector('#boxBody').innerHTML = texto;
         document.querySelector('#boxFoot').innerHTML = '';
         document.querySelector('#boxFoot').insertAdjacentElement("beforeend", btnConfirmar);
         document.querySelector('#boxFoot').insertAdjacentElement("beforeend", btnCancelar);
         // document.querySelector('.principal').style.filter = 'blur(2px)';
         //  document.querySelector('.vidro').style.display = 'block';
     }
     this.confirmar = function (callback) {
         let element = document.querySelector('#box')
         element.parentNode.removeChild(element);
         // document.querySelector('.principal').style.filter = 'none';
         //  document.querySelector('.vidro').style.display = 'none';
         callback(retConfirm = true);
     }
     this.cancelar = function (callback) {
         let element = document.querySelector('#box')
         element.parentNode.removeChild(element);
         //  document.querySelector('.principal').style.filter = 'none';
         //   document.querySelector('.vidro').style.display = 'none';
         callback(retConfirm = false);
     }
 }

 function novoAlert() {
     this.cod = function (texto,local) {
        criaElementoAll({tipo:'div',local:local, nomeVar:'box',nomeId:'box',nomeClass:'box col-10',texto:''});
        criaElementoAll({tipo:'div',local:'#box',nomeVar:'boxHead',nomeId:'boxHead',nomeClass:'boxHead',texto:''});
        criaElementoAll({tipo:'div',local:'#box',nomeVar:'boxBody',nomeId:'boxBody',nomeClass:'boxBody',texto:''});
        criaElementoAll({tipo:'div',local:'#box',nomeVar:'boxFoot',nomeId:'boxFoot',nomeClass:'boxFoot',texto:''});

         novoAlert = document.querySelector('#box');
         novoAlert.style.display = 'block';
         novoAlert.style.top = '20%';
         document.querySelector('#boxHead').innerHTML = "ATENÇÃO";
         document.querySelector('#boxBody').innerHTML = texto;
         document.querySelector('#boxFoot').innerHTML = '<button class="botaoBox" onclick="Alert.ok()">OK</button>'
         //novoAlert.style.left = (document.querySelector(local).innerWidth/2)  +"px";
         //document.querySelector('.container').style.filter = 'blur(2px)';        
         // document.querySelector('.vidro').style.display = 'block';
     }
     this.ok = function () {
         let element = document.querySelector('#box')
         element.parentNode.removeChild(element);
         //  document.querySelector('#box').style.display = 'none';
         //  document.querySelector('.principal').style.filter = 'none';
         //   document.querySelector('.vidro').style.display = 'none';
     }
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


function remove(param){
    confirm.cod(`Deseja remover: ${codgL[2][codgL[0].indexOf(param)]} <br>da sua lista de compra?`,'.telaHome','.telaHome', function(){
        if(retConfirm == true){
          
            let index = codgL[0].indexOf(param)
            if(index > -1){
                Alert.cod(`Item removido com sucesso!`,'.telaHome');
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
    <button class="alter" onclick="altera(true,${indice})">></button>`,'.telaHome', function(){
        
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
        criaElementoAll({tipos:'div',local:'#contFiM',nomeVar:'descricaoList',nomeId:'descricaoList',nomeClass:' text-center  col-6',texto:'<b>Descrição'});
        criaElementoAll({tipos:'div',local:'#contFiM',nomeVar:'unidadeList',nomeId:'unidadeList',nomeClass:' text-center col-1',texto:'<b>Un'});
        criaElementoAll({tipos:'div',local:'#contFiM',nomeVar:'quantidadeList',nomeId:'quantidadeList',nomeClass:' text-center col-1',texto:'<b>Qnt'});
        criaElementoAll({tipos:'div',local:'#contFiM',nomeVar:'precoUnList',nomeId:'precoUnList',nomeClass:' text-center col-2',texto:'<b>V.Unitario'});
        criaElementoAll({tipos:'div',local:'#contFiM',nomeVar:'precoTotList',nomeId:'precoTotList',nomeClass:' text-center    col-2',texto:'<b>V.Total'});
        var precoFinal = 0;
        for (let i = 0; i < codgL[0].length; i++) {
            
            let totalUn =  codgL[4][i] * codgL[1][i];
            
            carList.style.display = 'flex';
            
            document.getElementById('descricaoList').innerHTML += `<div class='descList  ' onclick='remove("${codgL[0][i]}")'>${codgL[2][i]}</div>`;
            document.getElementById('quantidadeList').innerHTML += `<div class='quantList   text-center ' onclick='chamaAltera("${i}")'>${codgL[1][i]}</div>`;
            document.getElementById('unidadeList').innerHTML += `<div class="text-center  ">${codgL[3][i]}</div>`;
            document.getElementById('precoUnList').innerHTML += `<div class="text-center   ">${codgL[4][i]}</div>`;
            document.getElementById('precoTotList').innerHTML += `<div class="text-center  ">${totalUn.toFixed(2)}</div>`;
            
            precoFinal +=  totalUn;
            precoFinal.toFixed(2);
                
           // console.log(precoFinal,typeof(precoFinal),totalUn);
        }
       
        criaElementoAll({tipos:'div',local:'#contFiM',nomeVar:'totalList',nomeId:'totalList',nomeClass:'totalList text-end  fst-italic fw-bolder"> col-12  ',texto:`Total: R$ ${precoFinal.toFixed(2)}`});
    
}



function reset(){
    numPag=0;
    codigoLocal = [];
    codigoLocal =[];
    carList.style.display = 'none';
    sectionButtons.innerHTML="";
    //nav2.innerHTML= "";
    document.querySelector('#busca').innerHTML='';
    document.querySelector('#voltarIni').innerHTML='';
    navGuia.innerHTML = '';
  //  navResp.innerHTML='';
}


function telaCarrinho(){
    if(codgL[0] == ''){
       
        Alert.cod('Não há produtos em sua lista','.telaHome');
      telaIni();
         
      }else{
    navGuia.innerHTML = 'Lista de Compra';
    console.log(codgL[2]);
   criaLista();
   sendRemove();

      }
}
function paginacao(){
     //variavel referente a paginação
     var numPag = 0;
     buscaItem();
     
     criaElementoAll({tipo:'div',local:'#voltarIni',nomeVar:'anterior',nomeId:'anterior',nomeClass:'next col-6 text-center ',texto:'← Anterior'}); 
    criaElementoAll({tipo:'div',local:'#voltarIni',nomeVar:'proximo',nomeId:'proximo',nomeClass:'next col-6  text-center ',texto:'Proximo →'}); 
    
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
                             $("#busca").html(resposta);
                            },     
                error: function(){
                    $("#busca").html("Erro ajax");
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
                    $("#busca").html(resposta);
                },     
                error: function(){
                    $("#busca").html("Erro ajax");
                }
                });
            }                       
        });

}
function listaProd(){   
   
   paginacao();
        
    
  //  navResp.style.display = 'block';
    navBusca.style.display = 'block';
     criaElementoAll({tipo:'table',local:'#sectionButtons',nomeVar:'table',nomeId:'tab',nomeClass:'table',texto:'<td class="col-6 fs-6 text-center"><b>Descricao</td><td class="col-3 fs-6  text-center"><b>Unidade</td><td class="col-3 fs-6  text-center"><b>Preço</td>'});
         codigoPhp = JSON.stringify(codigoFim);
        $.ajax({
            url:"PHP/recebeDados.php",
           type: 'post',
           data:{data: codigoPhp,
                 numero: numPag},
           success: function(resposta){
            $("#busca").html(resposta);
        },     
        error: function(){
            $("#busca").html("Erro ajax");
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
    <button class="alter" onclick="altera(true,${codgL[0].indexOf(codigo)})">></button>`,'.telaHome', function(){
        
        if(retConfirm == true){
           
        }else{
            codgL[1][codgL[0].indexOf(codigo)] = valor;
           
        }
    });
                 
         } else {
            confirm.cod(`Deseja inserir o item: ${descricao}<br> à sua lista?`,'.telaHome', function(){
                            
                if(retConfirm == true){
                   
                    codgL[0].push(codigo);                            
                    codgL[1].push(1); 
                    codgL[2].push(descricao); 
                    codgL[3].push(unidade); 
                    codgL[4].push(preco.replace(",",".")); 

                    confirm.cod(`Alterar Quantidade?<br><button class="alter" onclick="altera(false,${codgL[0].indexOf(codigo)})"><</button>  ${codgL[1][codgL[0].indexOf(codigo)]}  
                    <button class="alter" onclick="altera(true,${codgL[0].indexOf(codigo)})">></button>`,'.telaHome', function(){
                        
                        if(retConfirm == true){ }});
                
                }else{
                    Alert.cod('Falha ao inserir o item à lista!','.telaHome');
                }
            });
            
        }  
        //console.log(codgL);   
   }  
  