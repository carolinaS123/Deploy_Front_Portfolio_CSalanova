import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnAddEducacionComponent } from './btn-add-educacion.component';

describe('BtnAddEducacionComponent', () => {
  let component: BtnAddEducacionComponent;
  let fixture: ComponentFixture<BtnAddEducacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnAddEducacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnAddEducacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
