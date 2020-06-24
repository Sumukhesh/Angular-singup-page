import { Component, OnInit } from '@angular/core';
import { Signup } from '../signup';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
})
export class SignupFormComponent implements OnInit {
  myForm;
  alert: boolean = false;
  constructor() {}

  model = new Signup('sumu', 'Gupta', 'Summu1', 'Zinda@123');
  ngOnInit(): void {}

  success() {
    this.alert = true;
    this.myForm.reset();
  }

  closeAlert() {
    //
  }
}
