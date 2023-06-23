import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScansionePage } from './scansione.page';

describe('ScansionePage', () => {
  let component: ScansionePage;
  let fixture: ComponentFixture<ScansionePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ScansionePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
