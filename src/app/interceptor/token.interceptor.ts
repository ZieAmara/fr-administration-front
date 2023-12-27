import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { TokenStorageService } from '../services/token-storage.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root',
})
export class TokenHttpInterceptor implements HttpInterceptor {

    constructor(
        private readonly tokenStorageService: TokenStorageService,
        private readonly router: Router
    ) {}


    // C'est dans la fonction intercept qu'on implémente la logique
    intercept ( request: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {

      const token = this.tokenStorageService.getToken();

      if (!token) { 
        return next.handle(request);
      }

      const updatedRequest = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
      
      return next.handle(updatedRequest).pipe(
        tap ({
          error: (error) => {
            if (error instanceof HttpErrorResponse && error.status === 401) {
              this.router.navigateByUrl('/login');
            }
          } 
        })
      );
  }
}
