import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAdministraiconComponent } from './dashboard-administraicon.component';

describe('DashboardAdministraiconComponent', () => {
  let component: DashboardAdministraiconComponent;
  let fixture: ComponentFixture<DashboardAdministraiconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardAdministraiconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAdministraiconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
