import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin',
  imports: [RouterModule, FormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
  model: any = {}
  cover!: string;
  coverFile!: string;
  showError = false

  onFileSelected(event: any) {
    const file = event.target.files[0]
    if (file) {
      this.coverFile = file
      const reader = new FileReader()
      // console.log(reader)
      reader.onload = () => {
        const dataUrl = reader.result!.toString();
        this.cover = dataUrl
        // console.log('image', this.cover)
      }
      reader.readAsDataURL(file)
      this.showError = false
    }
  }

  onSubmit(form: NgForm) {
    if (form.invalid || !this.cover) {
      console.log("Form Invalid")
      form.control.markAllAsTouched()
      if (!this.cover) {
        this.showError = true
      }
      return
    }


    console.log(form.value)
  }

}
