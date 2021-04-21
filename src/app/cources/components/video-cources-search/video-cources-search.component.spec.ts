import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCourcesSearchComponent } from './video-cources-search.component';

describe('VideoCourcesSearchComponent', () => {
  let component: VideoCourcesSearchComponent;
  let fixture: ComponentFixture<VideoCourcesSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VideoCourcesSearchComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoCourcesSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
