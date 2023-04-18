import { Component, Input } from '@angular/core';
import { Numbers } from '../numbers.model';

@Component({
  selector: 'app-cont',
  templateUrl: './cont.component.html',
  styleUrls: ['./cont.component.css']
})
export class ContComponent {
  @Input() numero:Numbers = new Numbers(0,0)
}
