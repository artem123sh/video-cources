import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCourcesListComponent } from './video-cources-list.component';

describe('VideoCourcesListComponent', () => {
  let component: VideoCourcesListComponent;
  let fixture: ComponentFixture<VideoCourcesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VideoCourcesListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoCourcesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
