import { TestBed } from '@angular/core/testing';

import { MyFirstLibService } from './my-first-lib.service';

describe('MyFirstLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyFirstLibService = TestBed.get(MyFirstLibService);
    expect(service).toBeTruthy();
  });
});
