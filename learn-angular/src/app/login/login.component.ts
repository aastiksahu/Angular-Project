import { Component } from '@angular/core';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(public httpService: HttpServiceService) { }
  
    endpoint = 'http://localhost:8080/Auth/login'
  
    form: any = {
      data: {},
      message: ""
    }
  
    login() {
      let self = this;
      console.log('login', this.form.data.login);
      console.log('password', this.form.data.password);
     
  
      this.httpService.post(this.endpoint, this.form.data, function (res: any) {
        console.log("response: ", res);
        self.form.message = res.result.message;
      })
  
    }

}
