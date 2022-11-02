import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnAddProyectoComponent } from './btn-add-proyecto.component';

describe('BtnAddProyectoComponent', () => {
  let component: BtnAddProyectoComponent;
  let fixture: ComponentFixture<BtnAddProyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnAddProyectoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnAddProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
