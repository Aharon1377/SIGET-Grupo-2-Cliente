import {ComponentFixture, TestBed, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import { CrearReunionComponent } from './crear-reunion.component';

describe('CrearReunionComponent', () => {
  let component: CrearReunionComponent;
  let fixture: ComponentFixture<CrearReunionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [ CrearReunionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearReunionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create reunion', () => {
  component.temas='tema';
  component.descripcion='descripcion';
  component.horaInicio='horai';
  component.horaFin='horaf';
  component.asistentes=['a','b'];
  component.convocante='c';
  component.reunion();
  expect(component.temas).toBe('tema');
  expect(component.descripcion).toBe('descripcion');
  expect(component.convocante).toBe('c');
  });
});
