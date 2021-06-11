import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CoursesState } from '../../../video-courses/state/courses.reducer';

@Component({
  selector: 'vc-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  constructor(public store: Store<{ courses: CoursesState }>) {}

  isLoading$: Observable<boolean>;

  ngOnInit(): void {
    this.isLoading$ = this.store.select((state) => state.courses.loading);
  }
}
