import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

interface ChatResponse {
  reply: string;
}

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {
  private apiUrl = 'http://127.0.0.1:8000/api/ai_respond/'; // Replace with your chatbot API URL

  constructor(private http: HttpClient) {}

  sendMessage(message: string): Observable<ChatResponse> {
    const params = new HttpParams().set('message', message);
    return this.http.get<ChatResponse>(this.apiUrl, { params });
  }
}
