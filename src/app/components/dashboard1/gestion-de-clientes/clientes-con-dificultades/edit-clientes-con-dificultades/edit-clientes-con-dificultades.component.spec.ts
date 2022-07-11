import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditClientesConDificultadesComponent } from './edit-clientes-con-dificultades.component';

describe('EditClientesConDificultadesComponent', () => {
  let component: EditClientesConDificultadesComponent;
  let fixture: ComponentFixture<EditClientesConDificultadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditClientesConDificultadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditClientesConDificultadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
