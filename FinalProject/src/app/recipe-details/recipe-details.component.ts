import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../shared/http.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.css'
})
export class RecipeDetailsComponent{
  private itemId!:number;
  public recipe:any = {};
  isLoading:boolean = true;
  
  constructor(private route:ActivatedRoute, private http:HttpService){
    this.route.params.subscribe((data:any) => { 
      this.itemId = data.id;
    });
    this.http.getSingleRecipe(this.itemId).subscribe((data:any) => this.recipe = data);
  }
}
