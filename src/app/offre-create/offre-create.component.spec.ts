import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreCreateComponent } from './offre-create.component';

describe('OffreCreateComponent', () => {
  let component: OffreCreateComponent;
  let fixture: ComponentFixture<OffreCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffreCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffreCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
