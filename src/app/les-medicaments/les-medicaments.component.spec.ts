import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LesMedicamentsComponent } from './les-medicaments.component';

describe('LesMedicamentsComponent', () => {
  let component: LesMedicamentsComponent;
  let fixture: ComponentFixture<LesMedicamentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LesMedicamentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LesMedicamentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
