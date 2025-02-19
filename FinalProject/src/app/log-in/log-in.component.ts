import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent{
  public userInfo:any;

  constructor(private route:ActivatedRoute, private router:Router){
    this.route.paramMap.subscribe((params:any) => this.userInfo = params.params);
  }

  onSubmit(data:NgForm){
    if(this.userInfo.email == data.value.email && this.userInfo.password == data.value.password){
      this.router.navigate(['/']);
      data.reset();
    }
    else{
      alert('incorrect');
    }
  }
}
