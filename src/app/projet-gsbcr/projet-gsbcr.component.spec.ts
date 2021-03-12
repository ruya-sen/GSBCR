import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetGsbcrComponent } from './projet-gsbcr.component';

describe('ProjetGsbcrComponent', () => {
  let component: ProjetGsbcrComponent;
  let fixture: ComponentFixture<ProjetGsbcrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjetGsbcrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetGsbcrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
