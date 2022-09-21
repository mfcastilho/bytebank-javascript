export class Conta{
  //atributos da classe
  static quantidadeDeContas = 0;
  
  //construtor da classe
  constructor(saldoInicial, cliente, agencia){
    if(this.constructor == Conta){
      throw new Error("Você não deveria instanciar um objeto do tipo conta");
    }
    this._cliente = cliente;
    this._agencia = agencia;
    this._saldo = saldoInicial;
    
  }

  //getters and setters da classe
  set setCliente(novoValor){
    if(novoValor instanceof Cliente){
      this._cliente = novoValor;
    }
  }

  get getCliente(){
    return this._cliente;
  }

  get getSaldo(){
    return this._saldo;
  }

  get getAgencia(){
    return this._agencia;
  }

  //métodos da classe
  sacar(valor){
    let taxa = 1;
    this._sacar(valor, taxa);
  }

  _sacar(valor, taxa){
    const valorSacado = taxa * valor;
    if(this._saldo >= valorSacado){
      this._saldo -= valorSacado;
      return valorSacado;
    }
    console.log("Saldo insuficiente!");
    return 0;
  }

  depositar(valor){
    if(valor <= 0){
      console.log("Operação inválida!");
      return; 
    }
    this._saldo += valor; 
  }

  transferir(valor, conta){
    if(valor > this._saldo){
      console.log("Saldo insuficiente para a transferência.");
      return;
    }
    const valorSaque = this.sacar(valor);
    conta.depositar(valorSaque);
  }
}