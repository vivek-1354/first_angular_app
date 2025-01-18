import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'second_app';

  constructor() {
    console.info("constructor called.")
  }

  ngOnInit() {
    console.info("ngOnInit called.")
  }

  changeTitle() {
    this.title = "Third app"
  }
}
