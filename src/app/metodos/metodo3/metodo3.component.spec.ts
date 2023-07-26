import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Metodo3Component } from './metodo3.component';

describe('Metodo3Component', () => {
  let component: Metodo3Component;
  let fixture: ComponentFixture<Metodo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Metodo3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Metodo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
