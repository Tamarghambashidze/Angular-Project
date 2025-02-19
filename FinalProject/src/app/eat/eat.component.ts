import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eat',
  templateUrl: './eat.component.html',
  styleUrl: './eat.component.css'
})
export class EatComponent implements OnInit{
  public searchValue!:string;
  public isActive:boolean = true;

  constructor(private router:Router){}

  ngOnInit(): void {
    this.checkWidth();
  }

  onSubmit(){
    if(this.searchValue.length > 2){
      this.router.navigate(["/eat/search", this.searchValue]);
    }
    else{
      this.router.navigate(['/eat']);
    }
  }

  onReset(){
    this.router.navigate(['/eat']);
    this.searchValue = '';
  }

  @HostListener('window:resize', ['$event'])

  onResize(event: Event) {
    this.checkWidth();
  }

  onClickToggle() {
    if (this.getWindow() && this.getWindow().innerWidth <= 800) {
      this.isActive = !this.isActive;
    }
  }

  private checkWidth() {
    if (this.getWindow() && this.getWindow().innerWidth > 800 && this.isActive) {
      this.isActive = true;
    }
  }

  private getWindow(): any {
    return typeof window !== 'undefined' ? window : null;
  }
}
