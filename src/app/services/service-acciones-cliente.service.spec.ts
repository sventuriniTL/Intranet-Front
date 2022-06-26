import { TestBed } from '@angular/core/testing';

import { ServiceAccionesClienteService } from './service-acciones-cliente.service';

describe('ServiceAccionesClienteService', () => {
  let service: ServiceAccionesClienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceAccionesClienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
