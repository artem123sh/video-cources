import { ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { VideoCoursesSearchComponent } from './video-courses-search.component';

describe('VideoCoursesSearchComponent', () => {
  let component: VideoCoursesSearchComponent;
  let fixture: ComponentFixture<VideoCoursesSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VideoCoursesSearchComponent],
      providers: [{ provide: ComponentFixtureAutoDetect, useValue: true }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoCoursesSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should perform search for searchInput', () => {
    const searchValue = 'Component searh value';
    component.searchInput = searchValue;
    const spy = spyOn(console, 'log');
    fixture.debugElement.query(By.css('#search')).triggerEventHandler('click', null);
    expect(spy).toHaveBeenCalledWith(searchValue);
  });
});
