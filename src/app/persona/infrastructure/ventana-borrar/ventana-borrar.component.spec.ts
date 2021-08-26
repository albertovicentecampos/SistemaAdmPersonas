import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentanaBorrarComponent } from './ventana-borrar.component';

describe('VentanaBorrarComponent', () => {
  let component: VentanaBorrarComponent;
  let fixture: ComponentFixture<VentanaBorrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentanaBorrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VentanaBorrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
