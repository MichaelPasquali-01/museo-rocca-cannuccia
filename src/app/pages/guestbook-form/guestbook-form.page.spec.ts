import { ComponentFixture, TestBed,async } from '@angular/core/testing';
import { GuestbookFormPage } from './guestbook-form.page';

describe('GuestbookFormPage', () => {
  let component: GuestbookFormPage;
  let fixture: ComponentFixture<GuestbookFormPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GuestbookFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
