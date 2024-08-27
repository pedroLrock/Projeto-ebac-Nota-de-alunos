const form = document.getElementById('nota');
form.addEventListener('submit', function(e){
  e.preventDefault(); // código para parar de atualizar a tela
});

const botaoSomar = document.getElementById("botaoSomar");
botaoSomar.addEventListener("click", somarValores); // criando uma função ao botao apos clicalo

function somarValores() {
  const inputs = document.querySelectorAll("input[type='number']"); // selecionando todos inputs com type= number
  let soma = 0; // criando a variável 'soma' e sentando ela a um valor inicial neutro '0'
  inputs.forEach(input => { // somando o valor dos inputs
    soma += parseInt(input.value);
  });

  const notaMinima = 35; // nota mínima para passar
  const falta = notaMinima - soma; // calculando a quantidade de pontos que falta

  if(soma >= notaMinima){
    const containerMensagemSucess=document.querySelector('.mensagem-sucess');
    const mensagemSucess = `Parabens o aluno passou com a nota: <b>${soma}</b>, Com a nota minima  necessária sendo <b>35<b>.`;
    containerMensagemSucess.style.display='block';
  document.querySelector('.mensagem-sucess').innerHTML = mensagemSucess; // atualizando a mensagem de sucesso
}
else{
    const containerErro = document.querySelector('.error-sucess');
    const mensagemErro = `O aluno não passou com a nota: <b> ${soma},</b> Faltam <b>${falta}</b> pontos para o aluno passar.`;
    containerErro.style.display = 'block';
    document.querySelector('.error-sucess').innerHTML = mensagemErro; //atualizando messagem de erro
    document.querySelector('.mensagem-sucess').style.display = 'none'; // esconder mensagem de sucesso
}

  document.querySelector('form').reset(); // resetando o formulário
}

const resetButton = document.getElementById('reset-button');

resetButton.addEventListener('click', () => {
  window.location.reload();
});