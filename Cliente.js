

export class Cliente{
 
  //getters da classe
  get getNome(){
    return this._nome;
  }
  
  get getCpf(){
    return this.cpf;
  }

  get getRg(){
    return this.rg;
  }

  //construtor da classe
  constructor(nome, cpf, rg){
    this._nome = nome;
    this._cpf = cpf;
    this._rg = rg;
  }

}

