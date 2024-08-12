import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AproposAnnonceComponent } from './apropos-annonce.component';

describe('AproposAnnonceComponent', () => {
  let component: AproposAnnonceComponent;
  let fixture: ComponentFixture<AproposAnnonceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AproposAnnonceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AproposAnnonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
