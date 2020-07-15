import { Component, OnInit } from '@angular/core';
import { PadawanService } from 'src/app/padawan.service';

0
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {

  constructor(private introducao: PadawanService) { }
 
  public introduction: string;
 
  ngOnInit(): void {
    this.introduction = this.introducao.getintroducao();
  }
  
}
