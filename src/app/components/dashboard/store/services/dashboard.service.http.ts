import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Question } from '@app/components/question/store/model/question';
import { Result } from '@app/components/question/store/model/Result';

import { environment } from '@env/environment';
import { Observable } from 'rxjs';

@Injectable()
export class DashboardServiceHttp {
  id: number;
  private readonly url: string;
  correct: number;
  incorrect: number;
  constructor(private httpClient: HttpClient) {
    this.url = environment.backend_url;
  }

  getQuestions(id: number): Observable<Question> {
    return this.httpClient.get<Question>(`${this.url}/dash/${this.id}`);
  }

  getDateExpiration(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.url}/test/${this.id}`);
  }

  setResult(id: number, result: Result): Observable<Result> {
    return this.httpClient.post<Result>(`${this.url}/result/${this.id}`, result);
  }

  getId(): number {
    return this.id;
  }
  setId(id: number) {
    this.id = id;
  }
}
