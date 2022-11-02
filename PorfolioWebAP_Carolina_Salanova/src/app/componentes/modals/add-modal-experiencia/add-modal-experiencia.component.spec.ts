import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddModalExperienciaComponent } from './add-modal-experiencia.component';

describe('AddModalExperienciaComponent', () => {
  let component: AddModalExperienciaComponent;
  let fixture: ComponentFixture<AddModalExperienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddModalExperienciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddModalExperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
