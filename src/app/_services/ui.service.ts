import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showMenu: boolean = false;

  constructor() {}

  toggleMenu(): boolean {
    this.showMenu = !this.showMenu;
    return this.showMenu;
  }
}
