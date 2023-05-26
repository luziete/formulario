import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public formLogin: FormGroup;

  constructor(private formBuider: FormBuilder) {
    this.formLogin = this.formBuider.group({
      email: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern(
            '^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'
          ),
        ]),
      ],

      password: [
        null,
        Validators.compose([Validators.required, Validators.minLength(8)]),
      ],
    });
  }

  ngOnInit() {}
}
