import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnAddExperienciaComponent } from './btn-add-experiencia.component';

describe('BtnAddExperienciaComponent', () => {
  let component: BtnAddExperienciaComponent;
  let fixture: ComponentFixture<BtnAddExperienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnAddExperienciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnAddExperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
