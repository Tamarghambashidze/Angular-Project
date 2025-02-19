import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrl: './registration-form.component.css'
})
export class RegistrationFormComponent {
  public user!:object

  constructor(private router:Router){ }

  onSubmit(data:NgForm){
    this.user = data.value;
    this.router.navigate(["/contact/log-in", data.value])
    data.reset();
  }
}
