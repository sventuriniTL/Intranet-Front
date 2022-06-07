import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Powerbi2Component } from './powerbi2.component';

describe('Powerbi2Component', () => {
  let component: Powerbi2Component;
  let fixture: ComponentFixture<Powerbi2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Powerbi2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Powerbi2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
