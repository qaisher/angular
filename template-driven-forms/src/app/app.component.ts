import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forms';
  topics = ['Angular', 'React', 'Vue'];
  userModel = new User('John', 'kkk@gk', 9899283333, 'default', 'morning', true);
  topicHasError = true;
  submitted = false;
  errorMsg = '';

  constructor(private _enrollmentService: EnrollmentService) {}

  validateTopic(val: string) {
    if (val === 'default')
      this.topicHasError = true;
    else
      this.topicHasError = false;
  }

  onSubmit(){
    this.submitted = true;
    this._enrollmentService.enroll(this.userModel)
      .subscribe(
        data => console.log('Success!', data),
        error => this.errorMsg = error.statusText
      )
  }
}


