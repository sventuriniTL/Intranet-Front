import { TestBed } from '@angular/core/testing';

import { ClientesConDificultadService } from './clientes-con-dificultad.service';

describe('ClientesConDificultadService', () => {
  let service: ClientesConDificultadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientesConDificultadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
