import { Component } from '@angular/core';
import { ChatbotService } from '../chatbot.service';

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html'
})
export class ChatWindowComponent {
  messages: Message[] = [];
  userInput: string = '';
  isOpen: boolean = false;

  constructor(private chatbotService: ChatbotService) {}

  sendMessage() {
    if (this.userInput.trim()) {
      const userMessage: Message = { text: this.userInput, sender: 'user' };
      this.messages.push(userMessage);

      this.chatbotService.sendMessage(this.userInput).subscribe(response => {
        const botMessage: Message = { text: response.reply, sender: 'bot' };
        this.messages.push(botMessage);
      });

      this.userInput = '';
    }
  }

  toggleChat() {
    this.isOpen = !this.isOpen;
  }
}
