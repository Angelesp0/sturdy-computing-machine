import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsPDFComponent } from './js-pdf.component';

describe('JsPDFComponent', () => {
  let component: JsPDFComponent;
  let fixture: ComponentFixture<JsPDFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsPDFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsPDFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
