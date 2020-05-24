import {fakeAsync, inject, TestBed, tick} from '@angular/core/testing';

import { Service } from './service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('Service', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [Service]
    });
  });

  function mockResponse(backend: HttpTestingController, url: string, body: any) {
    const testRequest = backend.expectOne(url);
    testRequest.flush(body);
    return testRequest;
  }

  it('should get message from backend', inject(
    [Service, HttpTestingController],
    fakeAsync((service, backend) => {

      const expectedMessage = 'expected text';
      let actualMessage;
      service.getMessage().subscribe(x => actualMessage = x);
      mockResponse(backend, 'http://localhost:4545/message', {text: expectedMessage});

      tick();

      expect(actualMessage).toBe(expectedMessage);
      backend.verify();
    })));
});
