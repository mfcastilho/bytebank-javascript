
import { Conta } from "./Conta.js";

//classe contaCorrente
export class ContaCorrente extends Conta{
  
  //atributos da classe
  static quantidadeDeContas = 0;
  
  //construtor da classe
  constructor(cliente, agencia){
    super(0, cliente, agencia)
    ContaCorrente.quantidadeDeContas++;
  }
  
  //sobrescrevendo o comportamento do método sacar da classe mãe
  sacar(valor){
    let taxa = 1.1;
    return this._sacar(valor, taxa); 
  }
}

