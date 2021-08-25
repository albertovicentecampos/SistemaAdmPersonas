import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentanaDialogComponent } from './ventana-dialog.component';

describe('VentanaDialogComponent', () => {
  let component: VentanaDialogComponent;
  let fixture: ComponentFixture<VentanaDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentanaDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VentanaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
