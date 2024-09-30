import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { forbiddenNameValidator } from './shared/userName.validator';
import { PasswordValidator } from './shared/password.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  registrationForm!: FormGroup;

  get userName(){
    return this.registrationForm.get('userName');
  }

  get email(){
    return this.registrationForm.get('email');
  }

  constructor(private fb: FormBuilder){}

  ngOnInit(){
    this.registrationForm = this.fb.group({
      userName: ['',[Validators.required, Validators.minLength(3), forbiddenNameValidator(/password/),forbiddenNameValidator(/admin/)]],
      email: [''],
      subscribe: [false],
      password: [''],
      confirmPassword: [''],
      adresse: this.fb.group({
        city: [''],
        State: [''],
        postalcode:['']
      })
    }, {validator: PasswordValidator});
    
    this.registrationForm.get('subscribe')?.valueChanges.subscribe(checkedvalue => {
      const email =this.registrationForm.get('email');
      if(checkedvalue){
        email?.setValidators(Validators.required);
      }else{
        email?.clearValidators();
      }
      email?.updateValueAndValidity();
    })
  }

  

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
