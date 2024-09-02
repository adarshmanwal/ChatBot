import { Component, ViewChild } from '@angular/core';
import { ChatWindowComponent } from './chat-window/chat-window.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  @ViewChild(ChatWindowComponent) chatWindow!: ChatWindowComponent;

  toggleChat() {
    this.chatWindow.toggleChat();
  }
}
