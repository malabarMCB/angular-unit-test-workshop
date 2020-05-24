import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SutComponent } from './sut.component';

describe('SutComponent', () => {
  let component: SutComponent;
  let fixture: ComponentFixture<SutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
