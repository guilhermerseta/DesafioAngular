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

  constructor() { }

  ngOnInit(): void {
  }

  public updateContactList(){
    if(this.nomeDigitado != '' && this.emailDigitado != null){
     this.contactList.push(this.nomeDigitado )
     this.contactList.push( this.emailDigitado + "@exemplo.com")
    }
    else{
      alert("Os campos são obrigatorios");
    }
   
  }
}
