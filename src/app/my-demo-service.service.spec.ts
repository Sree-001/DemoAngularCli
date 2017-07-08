import { TestBed, inject } from '@angular/core/testing';

import { MyDemoServiceService } from './my-demo-service.service';

describe('MyDemoServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyDemoServiceService]
    });
  });

  it('should be created', inject([MyDemoServiceService], (service: MyDemoServiceService) => {
    expect(service).toBeTruthy();
  }));
});
