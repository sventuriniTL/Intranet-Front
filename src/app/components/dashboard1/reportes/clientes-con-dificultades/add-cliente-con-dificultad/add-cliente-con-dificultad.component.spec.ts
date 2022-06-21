import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClienteConDificultadComponent } from './add-cliente-con-dificultad.component';

describe('AddClienteConDificultadComponent', () => {
  let component: AddClienteConDificultadComponent;
  let fixture: ComponentFixture<AddClienteConDificultadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddClienteConDificultadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddClienteConDificultadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
