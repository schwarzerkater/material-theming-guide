import { Component, OnInit } from '@angular/core';
import { takeWhile } from 'rxjs/operators'
import { FormControl } from '@angular/forms'
import { ThemeService } from '../theme.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  alive = true
  darkThemeControl: FormControl

  constructor(private themeService: ThemeService) {
    this.darkThemeControl = new FormControl(themeService.isDarkTheme(), [])
  }

  ngOnInit(): void {
    this.darkThemeControl.valueChanges
      .pipe(takeWhile(() => this.alive))
      .subscribe((checked) => (
        checked ? this.themeService.activateDarkTheme() : this.themeService.activateLightTheme()
      ))
  }

  ngOnDestroy(): void {
    this.alive = false
  }
}
