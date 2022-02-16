import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoCheckButtonComponent } from './to-do-check-button.component';

describe('ToDoCheckButtonComponent', () => {
  let component: ToDoCheckButtonComponent;
  let fixture: ComponentFixture<ToDoCheckButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoCheckButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoCheckButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
