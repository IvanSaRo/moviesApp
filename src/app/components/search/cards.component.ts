import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styles: [
  ]
})
export class CardsComponent {
  @Input("films")peliculas;

  films: Array<Object>;
  constructor() {

   }


}
