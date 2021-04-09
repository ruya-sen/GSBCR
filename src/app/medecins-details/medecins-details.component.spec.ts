import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedecinsDetailsComponent } from './medecins-details.component';

describe('MedecinsDetailsComponent', () => {
  let component: MedecinsDetailsComponent;
  let fixture: ComponentFixture<MedecinsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedecinsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedecinsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
