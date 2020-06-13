import { TestBed } from '@angular/core/testing';

import { ComponentsLibraryService } from './components-library.service';

describe('ComponentsLibraryService', () => {
  let service: ComponentsLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComponentsLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
