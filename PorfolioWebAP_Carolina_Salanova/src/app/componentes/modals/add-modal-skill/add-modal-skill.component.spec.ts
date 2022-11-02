import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddModalSkillComponent } from './add-modal-skill.component';

describe('AddModalSkillComponent', () => {
  let component: AddModalSkillComponent;
  let fixture: ComponentFixture<AddModalSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddModalSkillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddModalSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
