import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './app/user/profile.component.html',
  styles: [`
  em { float: right; color: #E05C65; padding-left: 10 px;}
  .error input {background-color: #E3C3C5;}
  .error ::-webkit-input-placeholder {color: #9999;}
  .error ::-moz-placeholder {color: #9999;}
  .error :-moz-placeholder {color: #9999;}
  .error :-ms-input-placeholder {color: #9999;}
  `]
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup
  private firstName: FormControl
  private lastName: FormControl

  constructor(private auth: AuthService, private router: Router) {

  }
  ngOnInit(): void {
    this.firstName = new FormControl(this.auth.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.lastName = new FormControl(this.auth.currentUser.lastName, Validators.required);
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }

  saveProfile(formValues) {
    let isSuccessFullUpdate = this.auth.updateCurrentUser(formValues.firstName, formValues.lastName);
    if (isSuccessFullUpdate)
      this.router.navigate(['/events'])
  }

  validateFirstName() {
    return this.firstName.valid || this.firstName.untouched;
  }

  validateLastName() {
    return this.lastName.valid || this.lastName.untouched;
  }

  cancel() {
    this.router.navigate(['/events'])
  }

}