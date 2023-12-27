import { Injectable } from '@angular/core';


const TOKEN_KEY = 'token';
const USERNAME_KEY = 'username';
const IS_LOGGED_IN = 'isLoggedIn';
const IS_LOGGED = 'true';


@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

    public clear(): void {
        if (this.isLocalStorageSupported()) {
            localStorage.clear();
        }
    }


    public save(token: string): void {
        localStorage.removeItem(TOKEN_KEY);
        localStorage.removeItem(USERNAME_KEY );
        localStorage.removeItem(IS_LOGGED_IN);
        localStorage.setItem(TOKEN_KEY, token);
        localStorage.setItem(IS_LOGGED_IN, IS_LOGGED);
    }


    public getToken(): string {
        if (this.isLocalStorageSupported()) {
            const token = localStorage.getItem(TOKEN_KEY);
            return token === null ? '' : token;
        }

        return '';
    }


    public isLogged(): boolean {
        if (this.isLocalStorageSupported()) {
            return Boolean(localStorage.getItem(IS_LOGGED_IN));
        }

        return false;
    }


    private isLocalStorageSupported(): boolean {
        return typeof localStorage !== 'undefined';
    }

}
