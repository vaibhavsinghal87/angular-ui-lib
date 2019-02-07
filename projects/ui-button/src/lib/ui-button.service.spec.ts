import { TestBed } from '@angular/core/testing';

import { UiButtonService } from './ui-button.service';

describe('UiButtonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UiButtonService = TestBed.get(UiButtonService);
    expect(service).toBeTruthy();
  });
});
