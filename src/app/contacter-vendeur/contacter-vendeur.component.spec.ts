import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContacterVendeurComponent } from './contacter-vendeur.component';

describe('ContacterVendeurComponent', () => {
  let component: ContacterVendeurComponent;
  let fixture: ComponentFixture<ContacterVendeurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContacterVendeurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContacterVendeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
