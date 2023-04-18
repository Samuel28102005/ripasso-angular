import { Component } from '@angular/core';
import { Numbers } from './numbers.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nome_progetto';
  numero:Numbers = new Numbers(0,0);
somma(num:HTMLInputElement)
{

this.numero.tot += Number(num.value);
this.numero.n_click += 1;

}
sottra(num:HTMLInputElement){

  this.numero.tot -= Number(num.value);
  this.numero.n_click += 1;

}

}
