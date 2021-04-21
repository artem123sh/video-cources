import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCourcesComponent } from './video-cources.component';

describe('VideoCourcesComponent', () => {
  let component: VideoCourcesComponent;
  let fixture: ComponentFixture<VideoCourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VideoCourcesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoCourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
