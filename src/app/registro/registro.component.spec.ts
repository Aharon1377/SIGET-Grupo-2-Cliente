import {ComponentFixture, TestBed, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import { RegistroComponent } from './registro.component';

describe('RegistroComponent', () => {
  let component: RegistroComponent;
  let fixture: ComponentFixture<RegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [ RegistroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should invalidate user', () => {
    component.nombre=''
    component.apellidos='';
    component.telefono=123;
    component.username='a';
    component.email='as@wdew';
    component.password='De123';
    component.roleID='a'
    component.metodoRegistrar();
    expect(component.creado).toBe(false);
  });

  it('should validate user', () => {
    component.nombre='elpepe'
    component.apellidos='asda';
    component.telefono=123;
    component.username='alpha';
    component.email='jajas@wdew';
    component.password='Delasda123';
    component.roleID='1'
    component.metodoRegistrar();
    expect(component.creado).toBe(true);
  });
});
