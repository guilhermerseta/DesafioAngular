import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.css']
})
export class RodapeComponent implements OnInit {

  constructor() { }

  @Input() name: string;
  @Output() cidadeFit = new EventEmitter<string>();

  ngOnInit(): void {
    this.cidadeFit.emit("Sorocaba");
  }
}
