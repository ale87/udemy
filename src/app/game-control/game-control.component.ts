import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
  @Output() start = new EventEmitter<number>()
  @Output() stop = new EventEmitter<number>()
  event: any
  counter: number = 0

  constructor() { }

  startGame(): void {
    this.event = setInterval(() => this.start.emit(this.counter++), 1000)
  }

  stopGame(): void {
    clearInterval(this.event)
    this.counter = 0
  }

}
