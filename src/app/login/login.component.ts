import { Component } from '@angular/core';
import { ApiHelperService } from '../services/api-helper.service';
import { TokenStorageService } from '../services/token-storage.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.sass'
})
export class LoginComponent {
  
  
  constructor(
    private apiService: ApiHelperService,
    private tokenStorageService: TokenStorageService,
  ) {}


  login(): void {
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;

    this.apiService.post({
      endpoint: '/auth/login',
      data: { username, password }
    }).then((response) => {
      this.tokenStorageService.save(response.access_token);
      console.log(response);
    });

    console.log('{ ' + username + ' ; ' + password + ' }');
  }

}
