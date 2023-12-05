import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MyInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //puedes realizar operaciones antes de enviar la solucitud como agregar encabezados
    const modifiedRequest = request.clone({
      setHeaders: {
        Authorization: 'Bearer token',
        'Content-Type': 'application/json'
        // 'Access-Control-Allow-Origin': '*',
        // 'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',

      }
      })
    return next.handle(modifiedRequest);
  }
}
