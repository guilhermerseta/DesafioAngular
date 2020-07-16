import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.css']
})
export class RodapeComponent implements OnInit {

  constructor() { }

  @Input() name: string;

  ngOnInit(): void {
  }

}
