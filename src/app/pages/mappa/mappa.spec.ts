import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MappaPage } from './mappa';

describe('MappaPage', () => {
  let component: MappaPage;
  let fixture: ComponentFixture<MappaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MappaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
