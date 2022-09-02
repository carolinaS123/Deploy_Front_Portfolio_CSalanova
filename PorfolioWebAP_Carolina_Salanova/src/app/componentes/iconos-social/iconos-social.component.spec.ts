import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconosSocialComponent } from './iconos-social.component';

describe('IconosSocialComponent', () => {
  let component: IconosSocialComponent;
  let fixture: ComponentFixture<IconosSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconosSocialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconosSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
