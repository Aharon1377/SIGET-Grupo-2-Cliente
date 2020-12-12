import {ComponentFixture, TestBed, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import { LoginComponent } from './login.component';



describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should invalidate user and password null', () => {
    component.email=null;
    component.password=null;
    component.login();
    component.updateAddress();
    expect(component.invalid).toBe(true);
  });

  it('should invalidate correct user and incorrect password', () => {
    component.email='victor';
    component.password='Del123';
    component.login();
    component.updateAddress();
    expect(component.invalid).toBe(true);
  });
});


