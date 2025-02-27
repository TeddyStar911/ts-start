import { Injectable } from '@angular/core';
import { Base } from '../../interfaces/base.interface';
import { BASE_DATA } from '../../data/base.data';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  getAll(): Observable<Base[]> {
    return of(BASE_DATA);
  }
}
