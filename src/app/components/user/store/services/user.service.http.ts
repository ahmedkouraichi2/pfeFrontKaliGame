import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@app/components/user/store/model/user';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import { KaligameResponse } from '@app/core/store/model/kaligame.response';

@Injectable()
export class UsersServiceHttp {
  private readonly url: string;
  constructor(private httpClient: HttpClient) {
    this.url = environment.backend_url;
  }

  getUsers(): Observable<KaligameResponse<User>> {
    return this.httpClient.get<KaligameResponse<User>>(`${this.url}/users`);
  }
}
