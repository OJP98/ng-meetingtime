import { Component, Inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './theme-toggle.component.html',
})
export class ThemeToggleComponent {
  public isDarkMode: boolean;
  public theme = 'light';
  constructor(@Inject(DOCUMENT) private document: Document) {
    const localStorage = document.defaultView?.localStorage;
    if (localStorage) {
      this.theme = localStorage.getItem('theme') || 'light';
      this.isDarkMode = this.theme === 'dark';
    } else {
      this.isDarkMode = false;
    }
    this.document.documentElement.setAttribute('data-theme', this.theme);
  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    const theme = this.isDarkMode ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    this.document.documentElement.setAttribute('data-theme', theme);
  }
}
