import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private _history: string[] = [];

  add(message: string) {
    this._history.push(message);
  }

  get history() {
    return this._history;
  }
}
