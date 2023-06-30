import { ComponentFixture, TestBed,async } from '@angular/core/testing';
import { MappaPage } from './mappa-page.component';

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
