import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArtistaPage } from './artista';

describe('ArtistaPage', () => {
  let component: ArtistaPage;
  let fixture: ComponentFixture<ArtistaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ArtistaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
