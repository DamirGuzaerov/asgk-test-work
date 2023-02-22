import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const headers = req.headers.set("Content-Type","application/json")
    console.log(headers)
    const apiReq = req.clone({ url: `https://api.asgk-group.ru/${req.url}` ,headers: headers});
    return next.handle(apiReq);
  }
}
