import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';
import { error } from 'console';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ['Angular', 'React', 'Vue'];
  topicHasError = true;
  submitted =false;
  errorMsg = '';

  userModel = new User('', 'rob@test.com', 5555588, 'default', 'morning', true);

  constructor(private _enrollmentService: EnrollmentService){}

  validateTopic(value: string){
    if(value === 'default'){
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }

  onSubmit(){
    this.submitted = true;
    this._enrollmentService.enroll(this.userModel).subscribe({
      next: (data) => console.log('Success!', data),
      error: (error) =>this.errorMsg = error.statusText,
      complete: () => console.log('Completed')
  })
    
  }
}
