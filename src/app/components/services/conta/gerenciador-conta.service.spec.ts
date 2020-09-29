import { TestBed } from '@angular/core/testing';

import { GerenciadorContaService } from './gerenciador-conta.service';

describe('GerenciadorContaService', () => {
  let service: GerenciadorContaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GerenciadorContaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
