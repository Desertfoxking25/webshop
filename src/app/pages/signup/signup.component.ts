import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { User } from '../../shared/models/User';
import { UserService } from '../../shared/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})

export class SignupComponent{
 
  signUpForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    rePassword: new FormControl(''),
    username: new FormControl('')
  });

  loading: boolean = false;

  constructor (private router: Router, private location: Location, private authService: AuthService, private userService: UserService) { }


  onSubmit(){
    this.loading = true;
    //console.log(this.signUpForm.value); ezzel megnézheted hogy milyen adatok kerültek fel
    this.authService.signup(this.signUpForm.get('email')?.value as string, this.signUpForm.get('password')?.value as string).then(cred => {
      const user: User = {
        id: cred.user?.uid as string,
        email: this.signUpForm.get('email')?.value as string,
        username: this.signUpForm.get('username')?.value as string,
      };
      this.userService.create(user).then(_ => {
        alert('Sikerekes regisztráció!')
        console.log('User added successfully.');
        this.router.navigateByUrl('/main');
        this.loading = false;
      }).catch(error => {
        console.error(error);
        this.loading = false;
      })
    }).catch(error => {
      console.error(error);
      this.loading = false;
    });
  }

  goBack() {
    this.location.back();
  }
}