import { Component, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent implements OnDestroy{
 
  email = new FormControl('');
  password = new FormControl('');

  loadingSubscription?: Subscription;
  
  loading: boolean = false;

  constructor(private router: Router, private authService: AuthService){}
  
  async login(){
    this.loading = true;

    this.authService.login(this.email.value as string, this.password.value as string).then(cred =>{
      console.log(cred);
      this.router.navigateByUrl('/main');
      this.loading = false;
    }).catch(error =>{
      console.error(error);
      this.loading = false;
    });
  }
  
  ngOnDestroy(): void {
    this.loadingSubscription?.unsubscribe();
  }
}
