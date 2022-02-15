import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoCheckComponent } from './to-do-check.component';

describe('ToDoCheckComponent', () => {
  let component: ToDoCheckComponent;
  let fixture: ComponentFixture<ToDoCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoCheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
