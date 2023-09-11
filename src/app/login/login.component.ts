import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

public loginForm:FormGroup = new FormGroup({
  email: new FormControl(),
  password: new FormControl()
});

constructor(private loginservice:LoginService, private router:Router){}

login(){
  console.log(this.loginForm);
  this.loginservice.doLogin(this.loginForm.value).subscribe(
    (data:any)=>{
      alert("Login Success");
      this.router.navigateByUrl("/dashboard");
      localStorage.setItem('token',data.token);
    },
    (err:any)=>{
      alert("Login Failed");
    }
  )
}

}
