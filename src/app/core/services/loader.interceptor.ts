import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpInterceptor } from '@angular/common/http';
import { finalize } from 'rxjs/operators';
import { LoaderService } from './loader.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  private totalRequests = 0;

  constructor(private loaderService: LoaderService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    this.totalRequests += 1;
    this.loaderService.setLoading(true);

    return next.handle(request).pipe(
      finalize(() => {
        this.totalRequests -= 1;
        if (this.totalRequests === 0) {
          this.loaderService.setLoading(false);
        }
      }),
    );
  }
}
