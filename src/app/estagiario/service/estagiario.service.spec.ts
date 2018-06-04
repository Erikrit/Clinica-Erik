import { TestBed, inject } from '@angular/core/testing';

import { EstagiarioService } from './estagiario.service';

describe('EstagiarioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EstagiarioService]
    });
  });

  it('should be created', inject([EstagiarioService], (service: EstagiarioService) => {
    expect(service).toBeTruthy();
  }));
});
