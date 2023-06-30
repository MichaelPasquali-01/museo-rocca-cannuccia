import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { ArtistaPage } from './artista-page.component';

describe('ArtistaPage', () => {
  let component: ArtistaPage;
  let fixture: ComponentFixture<ArtistaPage>;

  beforeEach(async(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArtistaPage],
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
