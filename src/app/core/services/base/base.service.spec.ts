import { TestBed } from '@angular/core/testing';
import { BaseService } from './base.service';
import { Base } from '../../interfaces/base.interface';
import { BASE_DATA } from '../../data/base.data';

describe('BaseService', () => {
  let service: BaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return all base data', (done: DoneFn) => {
    service.getAll().subscribe((data: Base[]) => {
      expect(data).toEqual(BASE_DATA);
      done();
    });
  });
});
