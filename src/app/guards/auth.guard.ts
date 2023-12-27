import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { TokenStorageService } from '../services/token-storage.service';
import { inject } from '@angular/core';


export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {

  const router = inject(Router);
  const tokenStorageService = inject(TokenStorageService);

  if (tokenStorageService.isLogged()) {
    console.log('Authgard true');
    return true;
  }

  console.log('Authgard false');
  router.navigateByUrl('/login');
  return false;
  
};

