const senhaChamada = document.querySelector('.senha');
const caixaChamado = document.querySelector('.caixa');

const btSenhaComum  = document.querySelector('#btComum');
const btSenhaRapido = document.querySelector('#btRapido');
const btSenhaPrioritario = document.querySelector('#btPrioritario');

const btCaixa1 = document.querySelector('#btCaixa1');
const btCaixa2 = document.querySelector('#btCaixa2');
const btCaixa3 = document.querySelector('#btCaixa3');
const btCaixa4 = document.querySelector('#btCaixa4');

const filaComum = [];
const filaRapida = [];
const filaPrioritaria = [];

let filaC = 0;
let filaR = 500;
let filaP = 1000;

function adicionarFila(event){
  if(event.target.id === 'btComum'){
    filaC++;
    filaComum.push(`C - ${filaC}`);
  }else if(event.target.id === 'btRapido'){
    filaR++;
    filaRapida.push(`R - ${filaR}`);
  }else if(event.target.id === 'btPrioritario'){
    filaP++;
    filaPrioritaria.push(`P - ${filaP}`)
  }
}

function sairFila(event){
  if(event.target.id === 'btCaixa1'){
    //atender prioritario
    const senha = filaPrioritaria.shift();
    senhaChamada.innerHTML = senha;
    caixaChamado.innerHTML = 'Caixa 1';
    if(filaPrioritaria.length === 0){
      //atender rapido
      const senha = filaRapida.shift();
      senhaChamada.innerHTML = senha;
      caixaChamado.innerHTML = 'Caixa 1';
      if(filaRapida.length === 0){
        //atender comum
        const senha = filaComum.shift();
        senhaChamada.innerHTML = senha;
        caixaChamado.innerHTML = 'Caixa 1';
      }
    }
  }
}



btSenhaComum.addEventListener("click", (event) => {
  adicionarFila(event);
});

btSenhaRapido.addEventListener("click", (event) => {
  adicionarFila(event);
});

btSenhaPrioritario.addEventListener("click", (event) => {
  adicionarFila(event);
});

btCaixa1.addEventListener("click", (event) => {
  sairFila(event);
});

