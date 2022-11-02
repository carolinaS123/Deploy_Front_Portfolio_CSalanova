import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddModalProyectoComponent } from './add-modal-proyecto.component';

describe('AddModalProyectoComponent', () => {
  let component: AddModalProyectoComponent;
  let fixture: ComponentFixture<AddModalProyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddModalProyectoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddModalProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
