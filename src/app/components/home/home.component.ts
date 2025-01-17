import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  // standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  // private router = inject(Router)

  constructor(private router: Router) { }

  navigate() {
    this.router.navigate(["/about"]);
  }
}
