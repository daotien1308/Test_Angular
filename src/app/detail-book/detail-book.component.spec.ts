import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBookComponent } from './detail-book.component';

describe('DetailBookComponent', () => {
  let component: DetailBookComponent;
  let fixture: ComponentFixture<DetailBookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailBookComponent]
    });
    fixture = TestBed.createComponent(DetailBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
