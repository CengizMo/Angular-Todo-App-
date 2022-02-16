import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackOverviewComponent } from './back-overview.component';

describe('BackOverviewComponent', () => {
  let component: BackOverviewComponent;
  let fixture: ComponentFixture<BackOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
