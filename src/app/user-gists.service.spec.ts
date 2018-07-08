import { TestBed, inject } from '@angular/core/testing';

import { UserGistsService } from './user-gists.service';

describe('UserGistsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserGistsService]
    });
  });

  it('should be created', inject([UserGistsService], (service: UserGistsService) => {
    expect(service).toBeTruthy();
  }));
});
