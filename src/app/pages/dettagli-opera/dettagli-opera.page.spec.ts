import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DettagliOperaPage } from './dettagli-opera.page';

describe('DettagliOperaPage', () => {
  let component: DettagliOperaPage;
  let fixture: ComponentFixture<DettagliOperaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DettagliOperaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
