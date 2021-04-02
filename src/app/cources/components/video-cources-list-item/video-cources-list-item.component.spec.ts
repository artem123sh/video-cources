import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCourcesListItemComponent } from './video-cources-list-item.component';

describe('VideoCourcesListItemComponent', () => {
  let component: VideoCourcesListItemComponent;
  let fixture: ComponentFixture<VideoCourcesListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VideoCourcesListItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoCourcesListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
