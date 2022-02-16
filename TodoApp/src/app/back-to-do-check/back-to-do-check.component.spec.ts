import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackToDoCheckComponent } from './back-to-do-check.component';

describe('BackToDoCheckComponent', () => {
  let component: BackToDoCheckComponent;
  let fixture: ComponentFixture<BackToDoCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackToDoCheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackToDoCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
