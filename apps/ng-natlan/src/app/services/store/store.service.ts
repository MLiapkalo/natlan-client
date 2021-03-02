import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';

@Injectable()
export class StoreService<T> {
  private store$: BehaviorSubject<T>;

  constructor(initialState: T) {
    this.store$ = new BehaviorSubject(initialState);
  }

  get state(): Observable<T> {
    return this.store$.asObservable();
  }

  get latestState(): T {
    return this.store$.getValue();
  }

  setState(delta: Partial<T> | T): void {
    this.store$.next(
      delta instanceof Object
        ? {
            ...this.latestState,
            ...delta,
          }
        : delta
    );
  }

  select<R>(selector: (a: T) => R): Observable<R> {
    return this.state.pipe(distinctUntilChanged(), map(selector));
  }
}
