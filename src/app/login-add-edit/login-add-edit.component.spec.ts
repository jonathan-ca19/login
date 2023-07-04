import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAddEditComponent } from './login-add-edit.component';

describe('LoginAddEditComponent', () => {
  let component: LoginAddEditComponent;
  let fixture: ComponentFixture<LoginAddEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginAddEditComponent]
    });
    fixture = TestBed.createComponent(LoginAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
