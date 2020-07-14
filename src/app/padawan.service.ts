import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PadawanService {

  private introducao = "Olá , seja bem vindo ao nosso programa";
  
  constructor() { }

  getintroducao(){
    return this.introducao;
  }

  setintroducao(name:string){
    this.introducao = "Olá "+name+", seja bem vindo ao nosso programa";
    return this.introducao;
  }
}
