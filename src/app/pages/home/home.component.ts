import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PadawanService } from 'src/app/padawan.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  public nameDigitado: string;
  public date = new Date();
 
  constructor(private introducao: PadawanService) { }
  
  @Output() name: string = "FIT";

  ngOnInit(): void {
  }
  ngOnDestroy(){
    if(this.nameDigitado != null){
      this.introducao.setintroducao(this.nameDigitado);
     }
  }
}
