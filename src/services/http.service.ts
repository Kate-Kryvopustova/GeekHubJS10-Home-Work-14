import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../app/login/user';

@Injectable()


export class HttpService{
   
  constructor(private http: HttpClient){ }

      postData(user: User){

      const encode = window.btoa(`${user.email}: ${user.password}`)
      const decodedData = window.atob(encode);
      
        
      return this.http.post('http://localhost:3000/postuser', user, {headers:{
        'Content-Type': 'application/json',
        'Authorization': `${decodedData}`,
        'Lol': `${decodedData}`
      }})
  }
}
