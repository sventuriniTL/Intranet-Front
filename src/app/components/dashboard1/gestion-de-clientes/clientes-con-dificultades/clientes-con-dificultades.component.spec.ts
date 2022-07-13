import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientesConDificultadesComponent } from './clientes-con-dificultades.component';

describe('ClientesConDificultadesComponent', () => {
  let component: ClientesConDificultadesComponent;
  let fixture: ComponentFixture<ClientesConDificultadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientesConDificultadesComponent ]
    })
    .compileComponents();



  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientesConDificultadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
