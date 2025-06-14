import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password-phone',
  templateUrl: './forgot-password-phone.component.html',
  styleUrls: ['./forgot-password-phone.component.scss'],
})
export class ForgotPasswordPhoneComponent  {

  constructor() { }
 email:string='';
 phoneNumber = '';
selectedCountryCode = '+962';
  onKeyup_email(event: KeyboardEvent){
this.email = (event.target as HTMLInputElement).value;
console.log(this.email);
  }  countries = [
    { name: 'السعودية', dial_code: '+966' },
    { name: 'مصر', dial_code: '+20' },
    { name: 'الإمارات', dial_code: '+971' },
    { name: 'الأردن', dial_code: '+962' }
    // يمكنك إزالة التكرار من قائمة الدول
  ];
  remove_email(){

    this.email='';
}
validation(){
  if(this.phoneNumber!==''){
     return 'login-button-activee';
  }else{return 'login-button';}
 
}
onKeyup_phone(event:any){
this.phoneNumber= (event.target as HTMLInputElement).value;
console.log(this.phoneNumber);
  }
 onCountryChange(event: any) {
  this.selectedCountryCode= (event.target as HTMLInputElement).value;
  console.log('تم تغيير رمز الدولة إلى:', this.selectedCountryCode);
}
}
