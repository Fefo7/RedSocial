import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargarUsuarioComponent } from './cargar-usuario.component';

describe('CargarUsuarioComponent', () => {
  let component: CargarUsuarioComponent;
  let fixture: ComponentFixture<CargarUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CargarUsuarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CargarUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
