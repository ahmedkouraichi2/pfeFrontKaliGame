import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { KaligameResponse } from '@app/core/store/model/kaligame.response';
import { environment } from '@env/environment';
import { Langage } from '@app/components/langage/store/model/langage';
import { Observable } from 'rxjs';
import { Question } from '@app/components/question/store/model/question';

@Injectable()
export class LangageServiceHttp {
  private readonly url: string;
  constructor(private httpClient: HttpClient) {
    this.url = environment.backend_url;
  }
  addDomaine(langage: Langage): Observable<Object> {
    return this.httpClient.post(`${this.url}/langage`, langage);
  }

  deleteDomaine(id: number): Observable<Boolean> {
    console.log('service');
    return this.httpClient.delete<Boolean>(`${this.url}/langage/${id}`);
  }

  editDomaine(langage: Langage): Observable<Object> {
    return this.httpClient.put(`${this.url}/langage`, langage);
  }

  getQuestions(id): Observable<Question[]> {
    return this.httpClient.get<Question[]>(`${this.url}/quest/${id}`);
  }

  addQuestion(question: Question): Observable<Question> {
    console.log(question);
    return this.httpClient.post<Question>(`${this.url}/quest/${question.langage.id}`, question);
  }

  deleteQuestion(id: number): Observable<Boolean> {
    console.log('service');
    return this.httpClient.delete<Boolean>(`${this.url}/quest/${id}`);
  }
  updateQuestion(question: Question): Observable<Question> {
    console.log(question.langage.id);
    return this.httpClient.put<Question>(`${this.url}/quest/${question.langage.id}`, question);
  }
}
