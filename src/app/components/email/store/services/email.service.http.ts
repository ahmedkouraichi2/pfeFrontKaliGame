import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Langage } from '@app/components/langage/store/model/langage';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';

@Injectable()
export class EmailServiceHttp {
  private readonly url: string;
  constructor(private httpClient: HttpClient) {
    this.url = environment.backend_url;
  }

  addDetails(details: Object): Observable<Object> {
    return this.httpClient.post(`${this.url}/email`, details);
  }

  getLangages(): Observable<Langage> {
    return this.httpClient.get<Langage>(`${this.url}/langage`);
  }
}
