import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ILoginForm } from '../app/interfaces/login';

@Injectable()


export class HttpService{

  private postURL = 'http://localhost:3000/postuser';

  constructor(private http: HttpClient){ }

  postData(user: ILoginForm): Observable<object> {

    const data = window.btoa(`${user.email}: ${user.password}`);
    const decodedData = window.atob(data);

    return this.http.post(this.postURL, user, {headers: {
        Authorization: `${decodedData}`,
      }});
  }
}
