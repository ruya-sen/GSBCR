import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LesMedecinsComponent } from './les-medecins.component';

describe('LesMedecinsComponent', () => {
  let component: LesMedecinsComponent;
  let fixture: ComponentFixture<LesMedecinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LesMedecinsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LesMedecinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
