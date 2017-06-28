import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css']
})
export class InputPropertyComponent implements OnInit {

  @Input('nome') // Expõe a variavel externamente com o nome que você informar
  nomeDoCurso: string = '';

  constructor() { }

  ngOnInit() {
  }

}
