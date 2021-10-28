const navProd = document.querySelector('.navProd');
const navServ = document.querySelector('.navServ');
const navOutr = document.querySelector('.navOutr');
const nav = document.querySelector('.nav');


function telaIni(){

    const produtos = document.createElement("BUTTON");
    produtos.id='prod';
    produtos.className='botao';
    produtos.innerHTML="Produtos";
    nav.insertAdjacentElement('beforeend', produtos);

    const servicos = document.createElement("BUTTON");
    servicos.id='serv';
    servicos.className='botao';
    servicos.innerHTML="Serviços";
    nav.insertAdjacentElement('beforeend', servicos);


    const outros = document.createElement("BUTTON");
    outros.id='outr';
    outros.className='botao';
    outros.innerHTML="Outros";
    nav.insertAdjacentElement('beforeend', outros);


    document.querySelector('#prod').addEventListener('click', function(){
        nav.innerHTML="";
        telaProd();
        
    })
    
    
}

function telaProd(){

    const residencial = document.createElement("BUTTON");
    residencial.id='resid';
    residencial.className='botao';
    residencial.innerHTML="Tinta Residencial";
    nav.insertAdjacentElement('beforeend', residencial);

    const automotivo = document.createElement("BUTTON");
    automotivo.id='autom';
    automotivo.className='botao';
    automotivo.innerHTML="Tinta Automotivo";
    nav.insertAdjacentElement('beforeend', automotivo);


    const utensilio = document.createElement("BUTTON");
    utensilio.id='utens';
    utensilio.className='botao';
    utensilio.innerHTML="Utensilios";
    nav.insertAdjacentElement('beforeend', utensilio);

    document.querySelector('#resid').addEventListener('click', function(){
        nav.innerHTML="";
        telaResid();
        
    })
}

function telaResid(){

    const prodParede = document.createElement("BUTTON");
    prodParede.id='prodPared';
    prodParede.className='botao';
    prodParede.innerHTML="Produto para Parede";
    nav.insertAdjacentElement('beforeend', prodParede);

    const prodPiso = document.createElement("BUTTON");
    prodPiso.id='prodPiso';
    prodPiso.className='botao';
    prodPiso.innerHTML="Produto para Piso";
    nav.insertAdjacentElement('beforeend', prodPiso);

    const prodTeto = document.createElement("BUTTON");
    prodTeto.id='prodTeto';
    prodTeto.className='botao';
    prodTeto.innerHTML="Produto para Piso";
    nav.insertAdjacentElement('beforeend', prodTeto);

    const prodFerro = document.createElement("BUTTON");
    prodFerro.id='prodFerro';
    prodFerro.className='botao';
    prodFerro.innerHTML="Produto para Ferro";
    nav.insertAdjacentElement('beforeend', prodFerro);


    const prodMadei = document.createElement("BUTTON");
    prodMadei.id='prodMadei';
    prodMadei.className='botao';
    prodMadei.innerHTML="Produto para Madeira";
    nav.insertAdjacentElement('beforeend', prodMadei);
}


telaIni();
eventos();

function eventos(){





}


function prodAutom(){
    const prodAutom = document.createElement("BUTTON");
    prodAutom.id='autom';
    automotivo.className='botao';
    prodAutom.innerHTML="Tinta Automotiva";
    nav.insertAdjacentElement('beforeend', prodAutom);
}