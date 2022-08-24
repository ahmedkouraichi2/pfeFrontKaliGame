import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class QuestionHttpService {
  private readonly url: string;
  constructor(private http: HttpClient) {
    this.url = environment.backend_url;
  }

  // getQuestion() {
  //   return this.http.get<any>('assets/questions.json');
  // }

  // getQuestions(): Observable<Question> {
  //   return this.http.get<Question>(`${this.url}/quest`);
  // }
}
