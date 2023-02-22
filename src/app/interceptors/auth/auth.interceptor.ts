import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from "../../services/auth/auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(this.addToken(request));
  }

  addToken(request: HttpRequest<any>): HttpRequest<any> {
    const headers =
      this.authService.token
        ? request.headers.set('Authorization', `${this.authService.token}`)
        : request.headers;

    return request.clone({
      headers,
    });
  }
}
