import { Component,Input } from '@angular/core';
import { Numbers } from '../numbers.model';

@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.css']
})
export class FavComponent {
@Input() numero : Numbers = new Numbers(0,0)
super_color : boolean = false;

super() {
this.super_color = !this.super_color;
}
}
