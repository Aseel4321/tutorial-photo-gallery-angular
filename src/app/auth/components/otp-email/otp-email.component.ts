import { AfterViewInit, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-otp-email',
  templateUrl: './otp-email.component.html',
  styleUrls: ['./otp-email.component.scss'],
})
export class OtpEmailComponent implements AfterViewInit{

 @ViewChildren(IonInput) inputs!: QueryList<IonInput>;

  constructor() {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.inputs.first.setFocus();
    }, 300);
  }
 num: { [key: number]: boolean } = {
  0: false,
  1: false,
  2: false,
  3: false
};
  onInputChange(event: any, index: number) {
    const input = event.target.value;
    if (input && input.trim() !== ''){this.num[index]=true;
      
    }else{this.num[index]=false;}

    if (input && index < this.inputs.length - 1) {
      this.inputs.toArray()[index + 1].setFocus();
    }
  }validation() {
  return this.num[0]==true && this.num[1]==true &&this.num[2]==true && this.num[3]==true ?
   'login-button-activee' : 'login-button';
}

}
