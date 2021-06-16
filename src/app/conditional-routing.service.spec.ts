import { TestBed } from '@angular/core/testing';

import { ConditionalRoutingService } from './conditional-routing.service';

describe('ConditionalRoutingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConditionalRoutingService = TestBed.get(ConditionalRoutingService);
    expect(service).toBeTruthy();
  });
});
