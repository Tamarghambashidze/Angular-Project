import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http:HttpClient) { }
  getFoodMenu(){
    return this.http.get("https://dummyjson.com/recipes");
  }

  getFoodByMeal(category:string){
    return this.http.get(`https://dummyjson.com/recipes/meal-type/${category}`);
  }

  getSingleRecipe(id:number){
    return this.http.get(`https://dummyjson.com/recipes/${id}`);
  }

  searchRecipe(value:string){
    return this.http.get(`https://dummyjson.com/recipes/search?q=${value}`);
  }
}
