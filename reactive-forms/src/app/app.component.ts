import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { forbiddenNameValidator } from './shared/userName.validator';
import { PasswordValidator } from './shared/password.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  get userName(){
    return this.registrationForm.get('userName');
  }

  constructor(private fb: FormBuilder){}

  registrationForm = this.fb.group({
    userName: ['',[Validators.required, Validators.minLength(3), forbiddenNameValidator(/password/),forbiddenNameValidator(/admin/)]],
    password: [''],
    confirmPassword: [''],
    adresse: this.fb.group({
      city: [''],
      State: [''],
      postalcode:['']
    })
  }, {validator: PasswordValidator});

  // registrationForm = new FormGroup({
  //   userName: new FormControl(''),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //   adresse: new FormGroup({
  //     city: new FormControl(''),
  //     State: new FormControl(''),
  //     postalcode: new FormControl('')
  //   })
  // });

  loadApiData() {
    this.registrationForm.setValue({
      userName: 'Bruce',
      password: 'test',
      confirmPassword: 'test',
      adresse: {
        city: 'City',
        State: 'State',
        postalcode: '123456'
      }
    });
  }

}
