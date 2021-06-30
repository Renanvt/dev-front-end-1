//VARIÁVEIS GLOBAIS
const senha = document.querySelector(".password2");
const senhaCliente = document.querySelector(".password");
const caixa = document.querySelector(".caixa2");
const btnComum = document.querySelector(".btnComum");
const btnRapido = document.querySelector(".btnRapido");
const btnPriori = document.querySelector(".btnPriori");
const btnCaixa1 = document.querySelector(".btnCaixa1");
const btnCaixa2 = document.querySelector(".btnCaixa2");
const btnCaixa3 = document.querySelector(".btnCaixa3");
const btnCaixa4 = document.querySelector(".btnCaixa4");

//Fila de array
const queueComum = [];
const queueRapido = [];
const queuePriori = [];
let queue = 0

//Reseta o texto da senha e caixa
function resetPriori() {
  if (queuePriori.length === 0) {
    senha.innerText = "0 - 0";
    caixa.innerText = "Caixa: ";
    return true
  }
  else
    return false
}
function resetRapido() {
  if (queueRapido.length === 0) {
    senha.innerText = "0 - 0";
    caixa.innerText = "Caixa: ";
    return true
  } else
    return false
}
function resetComum() {
  if (queueComum.length === 0) {
    senha.innerText = "0 - 0";
    caixa.innerText = "Caixa: ";
    return true
  }
  else
    return false;
}

//Realiza os atendimentos preferenciais
function handleCaixa1() {
  if (!resetPriori()) {
    const calledClient = queuePriori.shift();
    //remove o primeiro elemento da fila
    //armazena o valor que sai da fila na variável
    senha.innerText = calledClient;
    caixa.innerText = "Caixa: 1";

  }
  console.log(queuePriori);
}

//Atendem primeiro as senhas de atendimento rápido
function handleCaixa2() {
  if (!resetRapido()) {
    const callledClient = queueRapido.shift();
    senha.innerText = callledClient;
    caixa.innerText = "Caixa: 2";
  }
  console.log(queueRapido);
}

//Atendem primeiro as senhas de atendimento rápido
function handleCaixa3() {
  if (!resetRapido()) {
    const callledClient = queueRapido.shift();
    senha.innerText = callledClient;
    caixa.innerText = "Caixa: 3";
  }
  console.log(queueRapido);
}

//Realiza os atendimentos comuns
function handleCaixa4() {
  if (!resetComum()) {
    const callledClient = queueComum.shift();
    senha.innerText = callledClient;
    caixa.innerText = "Caixa: 4";
  }
  console.log(queueComum);
}

//Adicionar evento na fila
function queueAdd(event) {
  //Se o evento clickado tiver o texto === "Comum"
  if (event.target.innerText === "Comum") {
    queue++; // fila = 1
    queueComum.push(`C-${queue}`) //Envia um elemento dentro da array
    senhaCliente.innerText = `C-${queue}`;
  }
  console.log(queueComum);

  if (event.target.innerText === "Rápido") {
    queue++;
    queueRapido.push(`R-${queue}`)
    senhaCliente.innerText = `R-${queue}`;
  }
  console.log(queueRapido);

  if (event.target.innerText === "Prioritário") {
    queue++;
    queuePriori.push(`P-${queue}`)
    senhaCliente.innerText = `P-${queue}`;
  }
  console.log(queuePriori);
}


//Retirar elemento da fila
function exitQueue(event) {
  if (event.target.innerText === "Caixa 1") {
    handleCaixa1(); //Realiza os atendimentos preferenciais
    if (resetPriori()) { //Se não houver atendimentos preferenciais na fila
      handleCaixa2(); //atende o próximo atendimento rápido
      caixa.innerText = "Caixa: 1";
    }
    if (resetRapido()) { //Se não houver atendimentos rápidos
      handleCaixa4(); //atende o próximo comum
      caixa.innerText = "Caixa: 1";
    }
  }

  if (event.target.innerText === "Caixa 2") {
    handleCaixa2(); //Atendem primeiro as senhas de atendimento rápido
    if (resetRapido()) { //se não houver atende o próximo da atendimento prioritário
      handleCaixa1();
      caixa.innerText = "Caixa: 2";
    }
    if (resetPriori()) { //Se não houver também, atende o próximo comum
      handleCaixa4();
      caixa.innerText = "Caixa: 2";
    }
  }

  if (event.target.innerText === "Caixa 3") {
    handleCaixa3(); //Atendem primeiro as senhas de atendimento rápido
    if (resetRapido()) { //se não houver atende o próximo da atendimento prioritário
      handleCaixa1();
      caixa.innerText = "Caixa: 3";
    }
    if (resetPriori()) { // Se não houver também, atende o próximo comum
      handleCaixa4();
      caixa.innerText = "Caixa: 3";
    }
  }

  if (event.target.innerText === "Caixa 4") {
    handleCaixa4(); //Realiza os atendimentos comuns
    if (resetComum()) { // Se não houver atendimentos comuns na fila, atende o próximo atendimento prioritário
      handleCaixa1();
      caixa.innerText = "Caixa: 4";
    }
    if (resetPriori()) { //Se não houver também, atende o próximo rápido.
      handleCaixa2();
      caixa.innerText = "Caixa: 4";
    }
  }

}

btnComum.addEventListener("click", function (event) {
  queueAdd(event); //Adiciona o evento no botão.Quando clickar, adiciona a fila passando o evento do botão, tercerizando a função.
});

btnRapido.addEventListener("click", function (event) {
  queueAdd(event);
});

btnPriori.addEventListener("click", function (event) {
  queueAdd(event);
});


btnCaixa1.addEventListener("click", function (event) {
  exitQueue(event);
});

btnCaixa2.addEventListener("click", function (event) {
  exitQueue(event);
});

btnCaixa3.addEventListener("click", function (event) {
  exitQueue(event);
});

btnCaixa4.addEventListener("click", function (event) {
  exitQueue(event);
});







