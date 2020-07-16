import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'desafio';

  public cidade: string = "";
  public name = "FIT";

  public setCidade(texto:string){
    this.cidade = texto;
  }
}
