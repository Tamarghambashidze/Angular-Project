import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared/http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit{
  public menu:any[] = [];
  private category!:string;
  private searchValue!:string;
  public booleanArr:any[] = [];
  public idArr:number[] = [];

  constructor(private http:HttpService, private route:ActivatedRoute){ }

  ngOnInit(): void {
    this.route.params.subscribe((params:any) => {
      this.category = params.category;
      this.searchValue = params.value;
      this.loadMenu();
    });
  }

  private loadMenu(): void {
    let observable;
    if (this.category) {
      observable = this.http.getFoodByMeal(this.category);
    } 
    else if (this.searchValue) {
      observable = this.http.searchRecipe(this.searchValue);
    } 
    else {
      observable = this.http.getFoodMenu();
    }
    observable.subscribe((data: any) => {
      this.menu = data.recipes;
      this.createArr();
    });
  }

  private createArr():void {
    this.booleanArr = [];
    this.menu.forEach((data:any) => {
      this.booleanArr.push({
        id:data.id,
        favourite:true
      });
    });
  }

  sortBy(event:any){
    const value = event.target.value;

    switch(value){
      case "rating":
        this.menu.sort((a, b) => b.rating - a.rating);
        break;
      case "cooking-time-low-high":
        this.menu.sort((a, b) => (a.cookTimeMinutes + a.prepTimeMinutes) - (b.cookTimeMinutes + b.prepTimeMinutes));
        break;
      case "cooking-time-high-low":
        this.menu.sort((a, b) => (b.cookTimeMinutes + b.prepTimeMinutes) - (a.cookTimeMinutes + a.prepTimeMinutes));
        break;
      case "name-a-z":
        this.menu.sort((a,b) => a.name.localeCompare(b.name));
        break;
      case "name-z-a":
        this.menu.sort((a,b) => b.name.localeCompare(a.name));
        break;
      default:
        this.menu.sort((a,b) => a.id - b.id)
        break;
    }
  }

  private createIdArr() : void{
    this.idArr = [];
    this.booleanArr.forEach((data:any) => {
      if(!data.favourite){
        this.idArr.push(data.id);
      }
    })
  }

  onClickToggle(id:number){
    const item = this.booleanArr.find((data:any) => data.id == id);
    item.favourite = !item.favourite;
    this.createIdArr()
  }

  isRed(id:number) : boolean{
    const item = this.booleanArr.find(data => data.id == id);
    return item ? item.favourite : false;
  }
}
