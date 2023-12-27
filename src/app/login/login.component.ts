import { Component } from '@angular/core';
import { ApiHelperService } from '../services/api-helper.service';
import { TokenStorageService } from '../services/token-storage.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.sass'
})
export class LoginComponent {
  
  untorized_message: string = '';
  
  constructor(
    private readonly apiService: ApiHelperService,
    private readonly tokenStorageService: TokenStorageService,
    private readonly router: Router,
  ) {}


  login(): void {
    const username: string = (document.getElementById('username') as HTMLInputElement).value;
    const password: string = (document.getElementById('password') as HTMLInputElement).value;

    this.apiService.post({
      endpoint: '/auth/login',
      data: { username, password }
    }).then((response) => {
      this.tokenStorageService.save(response.access_token);
      if (this.tokenStorageService.isLogged()) {
        this.router.navigate(['/users']);
      } else {
        this.untorized_message = 'The username or password is incorrect! Please try again with valid credentials.';
      }
    });

    console.log('{ ' + username + ' ; ' + password + ' }');
  }

}
