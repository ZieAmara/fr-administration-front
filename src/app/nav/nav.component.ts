import { Component } from '@angular/core';
import { ApiHelperService } from '../services/api-helper.service';
import { TokenStorageService } from '../services/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.sass'
})
export class NavComponent {

  constructor(
    private readonly apiService: ApiHelperService,
    private readonly tokenStorageService: TokenStorageService,
    private readonly router: Router,
  ) { }

  logout(): void {
    console.log("click on logout !");
    this.tokenStorageService.clear();
    this.router.navigateByUrl('/login');
  }


}
