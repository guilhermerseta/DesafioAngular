import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PadawanService {

  private introducao = "Olá, seja bem vindo ao nosso programa desafio onde tentamos executar as lições aprendidas no curso";
  
  constructor() { }

  getintroducao(){
    console.error(this.introducao);
    return this.introducao
  }

  setintroducao(name:string){ 
    this.introducao = "Olá "+name+", seja bem vindo ao nosso programa desafio onde tentamos executar as lições aprendidas no curso";
  }
}
