import { Component } from '@angular/core';
import { FormControl } from '@angular/forms'
import { ThemeService } from './theme.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'material-theming-guide';

  requiredControl = new FormControl()

  constructor(themeService: ThemeService) {
    themeService.initTheme()
  }
}
