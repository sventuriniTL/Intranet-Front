import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarDerechoComponent } from './sidebar-derecho.component';

describe('SidebarDerechoComponent', () => {
  let component: SidebarDerechoComponent;
  let fixture: ComponentFixture<SidebarDerechoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarDerechoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarDerechoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
