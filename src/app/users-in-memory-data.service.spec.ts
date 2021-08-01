import { TestBed } from '@angular/core/testing';

import { UsersInMemoryDataService } from './users-in-memory-data.service';

describe('UsersInMemoryDataService', () => {
  let service: UsersInMemoryDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersInMemoryDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
