import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

interface IAuthResult{
  auth_token: string
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token?: string | null;
  constructor(private http: HttpClient, private router: Router) {
    this.token = localStorage.getItem("auth_token")
  }

  login(login: string, password: string) {
    return this.http
      .post<IAuthResult>('/test-auth-only', {login: login, password: password})
      .subscribe((value) => {
        this.token = value.auth_token
        this.setSession(value)
        this.router.navigateByUrl("/")
      })
  }

  private setSession(authResult: IAuthResult) {
    localStorage.setItem('auth_token', authResult.auth_token);
  }
}
