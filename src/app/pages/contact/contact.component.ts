import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public contactList : Array<string> = [];
  public emailDigitado: string;
  public nomeDigitado: string;
  public mensagem: string;
  public email: string;
  
  constructor() { }

  ngOnInit(): void {
  }

  public updateContactList(){
    if(this.nomeDigitado != '' && this.emailDigitado != null && this.email !=null && this.mensagem !=null){
      this.contactList.push("Nome: " + this.nomeDigitado + "  Email: " + this.emailDigitado+this.email 
      + "   Mensagem: "+ this.mensagem)
    }
    else{
      alert("Os campos são obrigatorios");
    }
  }
}
