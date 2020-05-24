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

  const parameters = [
    {description: 'should get not empty message from backend', expected: 'expected text', response: {text: 'expected text'}},
    {description: 'should get empty message from backend', expected: null, response: null}
    ];

  function mockResponse(backend: HttpTestingController, url: string, body: any) {
    const testRequest = backend.expectOne(url);
    testRequest.flush(body);
    return testRequest;
  }

  parameters.forEach((parameter) =>
    it(parameter.description, inject(
      [Service, HttpTestingController],
      fakeAsync((service, backend) => {

        let actualMessage;
        service.getMessage().subscribe(x => actualMessage = x);
        mockResponse(backend, 'http://localhost:4545/message', parameter.response);

        tick();

        expect(actualMessage).toBe(parameter.expected);
        backend.verify();
      })))
  );
});
