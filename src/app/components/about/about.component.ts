import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [RouterModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  private route = inject(ActivatedRoute)

  ngOnInit() {
    // const id = this.route.snapshot.paramMap.get("id")
    // console.log(id)

    this.route.params.subscribe({
      next: (val) => {
        console.log(val['id'])
      },
      error: (e) => {
        console.error(e)
      }
    })
  }
}
