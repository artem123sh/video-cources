import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private loading: BehaviorSubject<boolean>;

  constructor() {
    this.loading = new BehaviorSubject<boolean>(false);
  }

  setLoading(value: boolean): void {
    this.loading.next(value);
  }

  get isLoading() {
    return this.loading.asObservable();
  }
}
