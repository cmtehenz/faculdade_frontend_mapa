const senhaChamada = document.querySelector('.senha');
const caixaChamado = document.querySelector('.caixa');
const minhaSenha = document.querySelector('#minhaSenha');

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
    minhaSenha.innerHTML = `C - ${filaC}`;
  }else if(event.target.id === 'btRapido'){
    filaR++;
    filaRapida.push(`R - ${filaR}`);
    minhaSenha.innerHTML = `R - ${filaR}`;
  }else if(event.target.id === 'btPrioritario'){
    filaP++;
    filaPrioritaria.push(`P - ${filaP}`);
    minhaSenha.innerHTML = `P - ${filaP}`;
  }
}

function sairFila(event){
  if(event.target.id === 'btCaixa1'){
    if(filaPrioritaria.length > 0 ){
      //atender prioritário
      const senha = filaPrioritaria.shift();
      senhaChamada.innerHTML = senha;
      caixaChamado.innerHTML = 'Caixa 1';
    }else if(filaRapida.length > 0){
      //atender Rapido
      const senhaR = filaRapida.shift();
      senhaChamada.innerHTML = senhaR;
      caixaChamado.innerHTML = 'Caixa 1';
    }else if(filaComum.length > 0){
      //atender Comum
      const senhaC = filaComum.shift();
      senhaChamada.innerHTML = senhaC;
      caixaChamado.innerHTML = 'Caixa 1';
    }
  }

  if(event.target.id === 'btCaixa2'){
    if(filaRapida.length > 0 ){
      //atender Rapido
      const senhaR = filaRapida.shift();
      senhaChamada.innerHTML = senhaR;
      caixaChamado.innerHTML = 'Caixa 2';
    }else if(filaPrioritaria.length > 0){
      //atender Prioritário
      const senhaP = filaPrioritaria.shift();
      senhaChamada.innerHTML = senhaP;
      caixaChamado.innerHTML = 'Caixa 2';
    }else if(filaComum.length > 0){
      //atender Comum
      const senhaC = filaComum.shift();
      senhaChamada.innerHTML = senhaC;
      caixaChamado.innerHTML = 'Caixa 2';
    }
  }

  if(event.target.id === 'btCaixa3'){
    if(filaRapida.length > 0 ){
      //atender Rapido
      const senhaR = filaRapida.shift();
      senhaChamada.innerHTML = senhaR;
      caixaChamado.innerHTML = 'Caixa 3';

    }else if(filaPrioritaria.length > 0){
      //atender Prioritário
      const senhaP = filaPrioritaria.shift();
      senhaChamada.innerHTML = senhaP;
      caixaChamado.innerHTML = 'Caixa 3';
    }else if(filaComum.length > 0){
      //atender Comum
      const senhaC = filaComum.shift();
      senhaChamada.innerHTML = senhaC;
      caixaChamado.innerHTML = 'Caixa 3';
    }
  }

  if(event.target.id === 'btCaixa4'){
    if(filaComum.length > 0 ){
      //atender comum
      const senha = filaComum.shift();
      senhaChamada.innerHTML = senha;
      caixaChamado.innerHTML = 'Caixa 4';

    }else if(filaPrioritaria.length > 0){
      //atender Prioritário
      const senhaP = filaPrioritaria.shift();
      senhaChamada.innerHTML = senhaP;
      caixaChamado.innerHTML = 'Caixa 4';
    }else if(filaRapida.length > 0){
      //atender Rapido
      const senhaR = filaRapida.shift();
      senhaChamada.innerHTML = senhaR;
      caixaChamado.innerHTML = 'Caixa 4';
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

btCaixa2.addEventListener("click", (event) => {
  sairFila(event);
});

btCaixa3.addEventListener("click", (event) => {
  sairFila(event);
});

btCaixa4.addEventListener("click", (event) => {
  sairFila(event);
});

