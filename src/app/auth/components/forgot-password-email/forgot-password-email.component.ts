import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password-email',
  templateUrl: './forgot-password-email.component.html',
  styleUrls: ['./forgot-password-email.component.scss'],
})
export class ForgotPasswordEmailComponent {  
  constructor(private router: Router) {}
 email:string='';
  

  onKeyup_email(event: KeyboardEvent){
this.email = (event.target as HTMLInputElement).value;
console.log(this.email);
  }
  remove_email(){

    this.email='';
}
validation(){
  if(this.email!==''){
     return 'login-button-activee';
  }else{return 'login-button';}
 
}
forgot_nav(){
  this.router.navigate(['/Forgot-Password-Phone']);
}
}
