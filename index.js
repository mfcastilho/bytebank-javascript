import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";
import promptSync from 'prompt-sync';
import { ContaPoupanca } from "./contaPoupanca.js";
const prompt = promptSync();

const arrayContasCorrentes = new Array();
const arrayContasPoupancas = new Array();

//instanciando conta corrente1 e populando-a
const cliente1 = new Cliente("Ricardo", 11122233309, 123456789);
const agenciaCliente1 = 1001;
const contaCorrente1 = new ContaCorrente(cliente1, agenciaCliente1);
arrayContasCorrentes.push(contaCorrente1);
// contaCorrente1.cliente = new Cliente("Ricardo", 11122233309, 123456789);
// contaCorrente1._agencia = 1001;


//Instanciandoconta corrente2 e populando-a
const cliente2 =new Cliente("Alice", 88822233309, 987654321);
const agenciaCliente2 = 1001;
const contaCorrente2 = new ContaCorrente(cliente2,agenciaCliente2);
arrayContasCorrentes.push(contaCorrente2);
// contaCorrente2.cliente = new Cliente("Alice", 88822233309, 987654321);
// contaCorrente2._agencia = 1001;



//Função para o cliente criar uma nova conta
let criandoNovaContaCorrente = () =>{
  const nomeCliente = prompt("Digite o nome do cliente:");
  const cpfCliente = parseInt(prompt("Digite o cpf do cliente:"));
  const rgCliente = parseInt(prompt("Digite o rg do cliente:"));
  const cliente = new Cliente(nomeCliente, cpfCliente, rgCliente);
  const agenciaCliente = 1001;
  var contaCorrente = new ContaCorrente(cliente, agenciaCliente);
  arrayContasCorrentes.push(contaCorrente);
  // contaCorrente3.cliente = new Cliente(nomeCliente, cpfCliente, rgCliente);
  // contaCorrente3._agencia = 1001;
  
  return contaCorrente;
 }


 //Função para verificar se existe o nome do outro cliente que será beneficiado com a transferencia
 let verificandoSeClienteExiste = (nome)=>{
  for(let conta of arrayContasCorrentes){
    if(conta.getCliente.getNome  == nome){
      return conta;
    }
  }
  return "Não há cliente com esse nome!";
 }


 //variável de controle do menu
let rodando = true;


//Laço de repetição do Menu
while(rodando){
  console.log("Saldo Ricardo:"+ contaCorrente1._saldo);
  console.log("Saldo Alice:"+ contaCorrente2._saldo+"\n\n\n");
  console.log("------------BYTEBANK--------------");
  console.log("[1] PARA CRIAR UMA NOVA CONTA CORRENTE");
  console.log("[2]  PARA DEPOSITAR");
  console.log("[3]  PARA SACAR");
  console.log("[4]  PARA TRANSFERIR");
  console.log("[5] PARA VER SALDO");
  console.log("[6] MOSTRAR4 TODAS AS CONTAS")
  console.log("[0]  PARA SAIR");
  let respMenu = prompt("RESP:");
  switch(respMenu){
    case "1":
      var contaCorrente3 = criandoNovaContaCorrente();
      let rodandoSeQuerPoupanca = true;
      while(rodandoSeQuerPoupanca){
        console.log("Deseja vincular uma conta poupança a essa conta corrente?");
        console.log("[1] PARA SIM");
        console.log("[2] PARA NÃO");
        let respSeQuerPoupanca = prompt("RESP:");
        switch(respSeQuerPoupanca){
          case "1":
            var contaPoupanca3 = new ContaPoupanca(0, contaCorrente3.getCliente, contaCorrente3.getAgencia);
            arrayContasPoupancas.push(contaPoupanca3);
            rodandoSeQuerPoupanca = false;
            break;
          case "2":
            rodandoSeQuerPoupanca = false;
            break;
          default:
            console.log("Opção inválida!Tente novamente!");
            break;    
        }
      }     
      break;
    case "2":
      console.log("---------MENU DEPOSITO---------");
      const valorDeposito = parseFloat(prompt("Digite o valor do depósito: R$"));
      contaCorrente3.depositar(valorDeposito);
      break;
    case "3":
      console.log("---------MENU SAQUE---------");
      const valorSaque = parseFloat(prompt("Digite o valor do saque: R$"));
      contaCorrente3.sacar(valorSaque);
      break;
    case "4":
      console.log("---------MENU TRANSFERENCIA---------");
      const valorTransferencia = parseFloat(prompt("Digite o valor da transferencia: R$"));
      const nomeTitularContaParaTransferir = prompt("Digite o nome do titular da conta que quer transferir:");      
      const retorno = verificandoSeClienteExiste(nomeTitularContaParaTransferir);
      const verifica = typeof retorno;
      if(verifica == "object"){
        contaCorrente3.transferir(valorTransferencia,retorno);
      }else{
        console.log(retorno);
      }     
      break;
    case "5":
      console.log("---------MENU SALDO---------");
      console.log(`R$ ${contaCorrente3.getSaldo}`);
      break;  
    case "6":
      console.log("---------MENU TODAS AS CONTAS---------");
      console.log("--contas correntes--")
      console.log(arrayContasCorrentes);
      console.log("--contas poupanças--")
      console.log(arrayContasPoupancas);
      break;   
    case "0":
      rodando = false;
      break;
    default:
      console.log("Opção inválida!");
      break;  
  }

}


































//-----------CLIENTE1----------------

//Instanciando cliente1
// const cliente1 = new Cliente();

// //Passando informações do cliente1
// cliente1.nome = "Ricardo";
// cliente1.cpf = 11122233309; 
// cliente1.rg = 123456789;



//Passando informações conta corrente cliente1
// contaCorrente1.cliente = cliente1;


// //------------CLIENTE2-----------------

// //Instanciando cliente2
// const cliente2 = new Cliente();
//Instanciando conta corrente do cliente2
// 

// //Passando informações do cliente2
// // cliente2.nome = "Alice";
// // cliente2.cpf = 88822233309; 
// // cliente2.rg = 987654321;


// console.log(`saldo da conta corrente do ${contaCorrente1.cliente.nome} ANTES do depósito:R$ ${contaCorrente1._saldo}`);
// contaCorrente1.depositar(300);
// console.log(`saldo da conta corrente do ${contaCorrente1.cliente.nome}  DEPOIS do depósito:R$ ${contaCorrente1._saldo}`);
// // const valorSaque = 80;
// const valorDoSaqueCliente1  = contaCorrente1.sacar(80);
// console.log(`saldo da conta corrente do ${contaCorrente1.cliente.nome}  APÓS o saque:R$ ${contaCorrente1._saldo}`);



// console.log("\n\n\n-----------------------------------------------------\n\n\n");


// console.log(`saldo da conta corrente do ${contaCorrente2.cliente.nome} ANTES do depósito:R$ ${contaCorrente2._saldo}`);

// contaCorrente2.depositar(1200);
// console.log(`saldo da conta corrente do ${contaCorrente2.cliente.nome}  DEPOIS do depósito:R$ ${contaCorrente2._saldo}`);

// const valorDoSaqueCliente2  = contaCorrente2.sacar(750);
// console.log(`saldo da conta corrente do ${contaCorrente2.cliente.nome}  APÓS o saque:R$ ${contaCorrente2._saldo}`);


// contaCorrente2.transferir(200,contaCorrente1);

// console.log(`Saldo atual da conta corrente 2: ${contaCorrente2._saldo}`);
// console.log(`Saldo atual da conta corrente 1: ${contaCorrente1._saldo}`);




