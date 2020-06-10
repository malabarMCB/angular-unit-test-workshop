# angular-unit-test-workshop
Basic examples of unit testing in Angular

## The repo covers the following topics
* `HttpClient` mock
* Async methods mocking and testing with `fakeAsync()` and `tick()`
* Mocking dependencies by hands
* Testing a graphical part of a component with markup scrapping and `detectChanges()`

## Tests to explore
* [Angular component testing](https://github.com/malabarMCB/angular-unit-test-workshop/blob/master/workshop/src/app/components/sut/sut.component.spec.ts)
* [Service testing](https://github.com/malabarMCB/angular-unit-test-workshop/blob/master/workshop/src/app/services/service.spec.ts)

## Misc
* The project uses [Mountebank](http://www.mbtest.org/) mock server as a backend. Look at [mountebank-backend.json](https://github.com/malabarMCB/angular-unit-test-workshop/blob/master/mountebank-backend.json) to get more info about the mock server( it's pretty simple)