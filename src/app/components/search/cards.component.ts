import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styles: [
  ]
})
export class CardsComponent implements OnInit {
  @Input("films")peliculas;
  constructor() { }

  ngOnInit(): void {
  }

}
