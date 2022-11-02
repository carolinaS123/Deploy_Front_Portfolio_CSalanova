import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddModalEducacionComponent } from './add-modal-educacion.component';

describe('AddModalEducacionComponent', () => {
  let component: AddModalEducacionComponent;
  let fixture: ComponentFixture<AddModalEducacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddModalEducacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddModalEducacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
