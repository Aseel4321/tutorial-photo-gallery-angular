import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit { text_password='';text_numpassword=""
  selectedGender: string = 'male'; 
 dateOfBirth: string | null = null;
  password_bool:any=false;
  password_icon:string='eye-off-outline';
  password_type:string='password';
  repassword_bool:any=false;
  repassword_icon:string='eye-off-outline';
  repassword_type:string='password';
  email:string='';
  dob: any;
  repassword:any;
  booll:string="male"
password11:any;
password:string='';
img:string='assets/icon/man1.png';
   dob1: string='تاريخ الميلاد';
  today: string;
  birthDate: string = 'NaN-NaN-NaN';  // التاريخ المختار كـ نص
  selectedCountryCode = '+962';
  phoneNumber = '';
  gender: string = 'male';
  showPassword = false;
  showConfirm = false;
  list:boolean[]=[false,false,false,false,false];
  num:boolean[]=[];
  countries = [
    { name: 'السعودية', dial_code: '+966' },
    { name: 'مصر', dial_code: '+20' },
    { name: 'الإمارات', dial_code: '+971' },
    { name: 'الأردن', dial_code: '+962' }
    // يمكنك إزالة التكرار من قائمة الدول
  ];
remove(){
 this.dob1=''; 
}

  rectangles = [
    { id: 1, color: 'red' },
    { id: 2, color: 'blue' },
    { id: 3, color: 'green' },
    { id: 4, color: 'orange' },
    { id: 5, color: 'purple' }
  ];

  onKeyup_password(event:any){
this.password= (event.target as HTMLInputElement).value;
console.log(this.password);
  }
 onKeyup_repassword(event:any){
this.repassword= (event.target as HTMLInputElement).value;
console.log(this.repassword);
  }
  onKeyup_phone(event:any){
this.phoneNumber= (event.target as HTMLInputElement).value;
console.log(this.phoneNumber);
  }
 onCountryChange(event: any) {
  this.selectedCountryCode= (event.target as HTMLInputElement).value;
  console.log('تم تغيير رمز الدولة إلى:', this.selectedCountryCode);
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
eye_repassword(){
if(this.repassword_bool==false){
  this.repassword_bool=true;
  this.repassword_icon='eye-outline';
  this.repassword_type='type';
}else{this.repassword_bool=false;
  this.repassword_type='password';
    this.repassword_icon='eye-off-outline';
}
}
  onKeyup_email(event: KeyboardEvent){
this.email = (event.target as HTMLInputElement).value;
console.log(this.email);
  }onKeyup_date(event:any){
this.dob== (event.target as HTMLInputElement).value;
console.log(this.dob);
  }
  remove_email(){

    this.email='';


}
  ngOnInit() {
    
    //const now = new Date();
    //this.today = now.toISOString().split('T')[0]; // YYYY-MM-DD
    //this.dob = `yyyy`;
    //this.birthDate = this.formatReadableDate(this.today);

  }
  
onInputChange(event: any) {
  this.password=this.password = (event.target as HTMLInputElement).value;
  this.num.length=0;
  this.list[0]= /[A-Z]/.test(event.target.value);
  this.list[1] = /[a-z]/.test(event.target.value);
  this.list[2] = /\d/.test(event.target.value);
  this.list[3] = /[!@#$%^&*(),.?":{}|<>]/.test(event.target.value); 
 this.list[4] = event.target.value.length>8;
 for(let i=0;i<this.list.length;i++){
    if(this.list[i]===true){
      this.num.push(true)  
    }
    }
   
  }
    color(i:any){
      if(this.num.length==0){
        return '#E5E4E2'
      }else{
if(this.num.length==1){
if(i==0){
  return '#FF0000'
}else{return '#FFFFFF'}
}else if(this.num.length==2||this.num.length==3){
if(i<=1){
  return '#FFFF00'
}else{return '#FFFFFF'}
        }else if(this.num.length==4){
if(i<=2){
  return '#90EE90'
}else{return '#FFFFFF'}
        }else if(this.num.length==5){
          if(i<=4){
  return '#006400'
}else{return '#FFFFFF'}
        }
      }
    }
  // عندما يختار المستخدم تاريخ
onDateChange(event: any) {
  this.today = 'yes';
  const selectedDate = event.target.value;
  this.birthDate = this.formatReadableDate(selectedDate);
  console.log('التاريخ المختار:', this.birthDate);
}

formatReadableDate(dateString: string): string {
  const d = new Date(dateString);
  const dd = String(d.getDate()).padStart(2, '0');
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const yyyy = d.getFullYear();
  return `${dd}-${mm}-${yyyy}`;
}
//${dd}/${mm}/${yyyy}
  setGender(gender: string) {console.log(this.booll);
    
    if(gender==="female"){this.img='assets/icon/woman1.png';
      this.booll="female" ,console.log(this.booll);}else{this.booll="male" ;this.img='assets/icon/man1.png';}
  }

  togglePassword() {
    this.password_bool = !this.password_bool;
  }

  toggleConfirm() {
    this.showConfirm = !this.showConfirm;
  }onDateChangee(event: any) {
  const rawDate = event.detail?.value || event.target?.value;

  if (rawDate) {
    const dob = new Date(rawDate);
    if (!isNaN(dob.getTime())) {
      const formattedDate = `${dob.getDate()}/${dob.getMonth() + 1}/${dob.getFullYear()}`;
      this.birthDate=formattedDate;
      console.log("التاريخ المنسق:", formattedDate);
    } else {
      console.error("تاريخ غير صالح:", rawDate);
    }
  } else {
    console.error("لم يتم اختيار تاريخ");
  }
}

validation(){console.log(this.selectedGender);
   const dob = new Date(this.dateOfBirth);
    const formattedDate = `${dob.getDate()}/${dob.getMonth() + 1}/${dob.getFullYear()}`;
  console.log(formattedDate);
  if(this.email!==""){if((this.repassword==this.password)&&this.num.length==5&&this.birthDate!=='NaN-NaN-NaN'){return 'login-button-activee';}else{return 'login-button';}}
  else{if((this.repassword==this.password)&&this.num.length==5&&this.birthDate!=='NaN-NaN-NaN'&&this.email!==""){return 'login-button-activee';}else{return 'login-button';}}
 /* if(this.email!=""){if(this.email==''
   &&this.password==''&&this.repassword==''&&this.password==this.repassword&&this.num.length==5
){return 'login-button-activee'; }else{return 'login-button';}}else{if(this.email==''&&this.phoneNumber==''
   &&this.password==''&&this.repassword==''&&this.password==this.repassword&&this.num.length==5
){return 'login-button-activee';}else{{ return 'login-button';}}}

*/}

}
