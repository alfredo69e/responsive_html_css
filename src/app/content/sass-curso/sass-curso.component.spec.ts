/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SassCursoComponent } from './sass-curso.component';

describe('SassCursoComponent', () => {
  let component: SassCursoComponent;
  let fixture: ComponentFixture<SassCursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SassCursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SassCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
