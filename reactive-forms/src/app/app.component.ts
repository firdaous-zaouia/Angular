import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  registrationForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    adresse: new FormGroup({
      city: new FormControl(''),
      State: new FormControl(''),
      postalcode: new FormControl('')
    })
  });

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
