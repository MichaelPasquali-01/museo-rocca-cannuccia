import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StanzaPage } from './stanza.page';

describe('StanzaPage', () => {
  let component: StanzaPage;
  let fixture: ComponentFixture<StanzaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(StanzaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
