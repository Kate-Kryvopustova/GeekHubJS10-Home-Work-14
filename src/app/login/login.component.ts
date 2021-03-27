import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { User } from './user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [HttpService],
})
export class LoginComponent implements OnInit {
  hide = true;
  user: User = new User();


  constructor(private httpService: HttpService) { }


  submit(user: User):void {
    
    this.httpService.postData(user)
      .subscribe(
        error => console.log(error)
      );

    user.email = '';
    user.password = '';

  }

  ngOnInit(): void {
  }

}
