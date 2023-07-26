import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Metodo4Component } from './metodo4.component';

describe('Metodo4Component', () => {
  let component: Metodo4Component;
  let fixture: ComponentFixture<Metodo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Metodo4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Metodo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
