import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
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
