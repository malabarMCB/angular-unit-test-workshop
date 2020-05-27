import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';

import { SutComponent } from './sut.component';
import {Service} from '../../services/service';
import {Observable, of} from 'rxjs';

class ServiceMock {
  messageValue: string;

  getMessage(): Observable<string> {
    return of(this.messageValue);
  }
}

describe('SutComponent', () => {
  let component: SutComponent;
  let fixture: ComponentFixture<SutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SutComponent ],
      providers: [{provide: Service, useClass: ServiceMock}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SutComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render message', inject([Service],
    (service: ServiceMock) => {
      const expected = 'msg';
      service.messageValue = expected;

      fixture.detectChanges();

      const actual = fixture.debugElement.nativeElement.querySelector('p').innerText;
      expect(actual).toBe(expected);
    }));
});
