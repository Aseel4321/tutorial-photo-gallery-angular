import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}
  password_bool:any=false;
  password_icon:string='eye-off-outline';
  password_type:string='password';
  loginData = {
    email: '',
    password: '',
    rememberMe: true
  };

remove(){

    this.loginData.email='';


}
forgot_nav(){
  this.router.navigate(['/Forgot-Password-Email']);
}
signup_nav(){
  this.router.navigate(['/signup']);
}
eye(){
if(this.password_bool==false){
  this.password_bool=true;
  this.password_icon='eye-outline';
  this.password_type='type';
}else{this.password_bool=false;
  this.password_type='password';
    this.password_icon='eye-off-outline';
}
}

  ngOnInit() {
    //localStorage.setItem('login',"true");
  }


  onLogin(form: any) {
    if (form.valid) {
      console.log('Login Data:', this.loginData);
     
    }
  }
  
}
