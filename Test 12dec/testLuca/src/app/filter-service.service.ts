import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {ModelFilter} from './model-filter';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class FilterService {
  filter: Subject<ModelFilter> = new Subject();

  setFilter(_filter): void {
    this.filter.next(_filter);
  }

  getFilter(): Observable<ModelFilter> {
    return this.filter.asObservable();
  }
}
