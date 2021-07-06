import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  classList = document.querySelector('body').classList
  darkThemeCssClass = 'mtg-dark-theme'
  storageKey = 'theme'

  activateDarkTheme(): void {
    this.classList.add(this.darkThemeCssClass)
    localStorage.setItem(this.storageKey, this.darkThemeCssClass)
  }

  activateLightTheme(): void {
    this.classList.remove(this.darkThemeCssClass)
    localStorage.removeItem(this.storageKey)
  }

  public isDarkTheme(): boolean {
    return localStorage.getItem(this.storageKey) === this.darkThemeCssClass
  }

  initTheme(): void {
    this.isDarkTheme() ? this.activateDarkTheme() : this.activateLightTheme()
  }
}

