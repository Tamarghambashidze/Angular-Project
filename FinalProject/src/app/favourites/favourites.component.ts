import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { HttpService } from '../shared/http.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrl: './favourites.component.css'
})
export class FavouritesComponent implements OnChanges{
  @Input() numbers: number[] = [];
  @Input() booleans: boolean[] = [];

  public newMenu:any[] = [];

  constructor(private http: HttpService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['numbers'] && changes['numbers'].currentValue) {          
      this.loadData();
    }
  }

  loadData() {
    this.newMenu = [];
      
    this.numbers.forEach((id: number) => {
      this.http.getSingleRecipe(id).subscribe((data: any) => {
        this.newMenu.push(data);
      });
    });
  }

  onRemove(index:number){
    const value:any = this.numbers.find((id:number) => id == this.newMenu[index].id);
    const newIndex:number = this.numbers.indexOf(value);
    const object:any = this.booleans.find((data:any) => data.id == this.newMenu[index].id);
    this.newMenu.splice(index,1);
    this.numbers.splice(newIndex,1)
    object.favourite = !object.favourite;
  }
}
