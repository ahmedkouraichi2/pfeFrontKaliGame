import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '@env/environment';
import { Langage } from '@app/components/langage/store/model/langage';

@Injectable({
  providedIn: 'root',
})
export class DomainHttpService {
  private readonly url: string;
  id: number;
  constructor(private httpClient: HttpClient) {
    this.url = environment.backend_url;
  }

  getLangages(): Observable<Langage[]> {
    return this.httpClient.get<Langage[]>(`${this.url}/langage`);
  }
}
