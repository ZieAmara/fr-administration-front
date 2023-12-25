import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../services/token-storage.service';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate { 

  constructor(
    private router: Router,
    private tokenStorageService: TokenStorageService
  ) {}


  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot,
  ) : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.tokenStorageService.isLogged()) {
      console.log('Authgard true');
      return true;
    } else {
      console.log('Authgard false');
      this.router.navigateByUrl('/login');
      return false;
    }
  };

}
