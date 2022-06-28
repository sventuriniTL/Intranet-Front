import { TestBed } from '@angular/core/testing';

import { SidenavManagerService } from './sidenav-manager.service';

describe('SidenavManagerService', () => {
  let service: SidenavManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SidenavManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
