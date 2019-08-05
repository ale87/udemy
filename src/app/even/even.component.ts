import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent {
  @Input() number: number

  constructor() { }

  isEven(): Boolean {
    return this.number % 2 === 0
  }
}
