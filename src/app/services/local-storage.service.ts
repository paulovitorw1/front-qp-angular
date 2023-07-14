import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  getLocalStorage(key: string): any {
    const dadosString = localStorage.getItem(key);
    if (dadosString !== null) {
      return JSON.parse(dadosString);
    }
    return null;
  }

  setLocalStorage(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }
}
