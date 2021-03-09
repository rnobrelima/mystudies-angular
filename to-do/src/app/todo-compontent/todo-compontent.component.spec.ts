import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoCompontentComponent } from './todo-compontent.component';

describe('TodoCompontentComponent', () => {
  let component: TodoCompontentComponent;
  let fixture: ComponentFixture<TodoCompontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoCompontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoCompontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
