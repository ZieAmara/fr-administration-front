import { Component } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.sass'
})
export class NavComponent {
  constructor(
    private readonly tokenStorageService: TokenStorageService,
    private readonly router: Router,
  ) { }


  logout(): void {
    console.log("click on logout !");
    this.tokenStorageService.clear();
    this.router.navigateByUrl('/login');
  }


  goToUsers() {
    this.router.navigateByUrl('/users');
  }

  goToUsersSheets() {
    this.router.navigateByUrl('/users/sheets');
  }

  goToUsersCreation() {
    this.router.navigateByUrl('/users/creation');
  }
  

  goToAssociations() {
    this.router.navigateByUrl('/associations');
  }

  goToAssociationsSheets() {
    this.router.navigateByUrl('/associations/sheets');
  }

  goToAssociationsCreation() {
    this.router.navigateByUrl('/associations/creation');
  }

  goToUserProfil() {
    this.router.navigateByUrl('/user/profil');
  }

  
  goToHome() {
    this.router.navigateByUrl('/home');
  }


}
