import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayFinishedListComponent } from './today-finished-list.component';

describe('TodayFinishedListComponent', () => {
  let component: TodayFinishedListComponent;
  let fixture: ComponentFixture<TodayFinishedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodayFinishedListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayFinishedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
