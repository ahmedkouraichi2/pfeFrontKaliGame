import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '@env/environment';
import { RootState } from '@app/core/store/root.state';
import { sendError } from '@app/components/error/store/error.actions';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private store: Store<RootState>) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((err) => {
        if (!environment.production) {
          console.log(err.error);
        }
        const errorMessage = err.error.message || err.statusText;
        if (req.url !== '/collaborateurs') {
          this.store.dispatch(sendError({ errorMessage }));
        }
        return next.handle(req);
      })
    );
  }
}
