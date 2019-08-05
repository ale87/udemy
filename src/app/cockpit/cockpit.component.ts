import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  @Output() serverCreated = new EventEmitter<{ serverType: String, serverName: String, serverContent: String }>()
  serverType: String = 'server'
  serverName: String
  serverContent: String  

  constructor() { }

  addServer() {
    this.serverCreated.emit({ 
      serverType: this.serverType, 
      serverName: this.serverName, 
      serverContent: this.serverContent 
    })
  }
}
  