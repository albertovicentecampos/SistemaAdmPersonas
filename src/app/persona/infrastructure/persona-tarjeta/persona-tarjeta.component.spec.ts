import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaTarjetaComponent } from './persona-tarjeta.component';

describe('PersonaTarjetaComponent', () => {
  let component: PersonaTarjetaComponent;
  let fixture: ComponentFixture<PersonaTarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonaTarjetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
