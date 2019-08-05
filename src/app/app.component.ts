import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'udemy';
  serverElements = []
  numbers: number[] = []

  serverAdded(serverData: { serverType: String, serverName: String, serverContent: String }) {
    this.serverElements.push({
      type: serverData.serverType,
      name: serverData.serverName,
      content: serverData.serverContent
    })
  }

  createComponent(number: number): void {
    this.numbers.push(number) 
  }

  resetNumbers(): void {
    this.numbers = []
  }
}
