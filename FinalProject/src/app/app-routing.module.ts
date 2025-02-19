import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { LogInComponent } from './log-in/log-in.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactComponent } from './contact/contact.component';
import { DetailsComponent } from './details/details.component';
import { EatComponent } from './eat/eat.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { MenuComponent } from './menu/menu.component';
const routes: Routes = [
  {path:'', component:HomePageComponent},
  {path:'home/:name', component:DetailsComponent},
  {
    path:'contact', 
    component:ContactComponent,
    children:[
      {path:'', component:RegistrationFormComponent},
      {path:'log-in', component:LogInComponent}
    ]
  },
  {
    path:'eat',  
    component:EatComponent,
    children:[
      {path:'', component:MenuComponent},
      {path:'meal-type/:category', component:MenuComponent},
      {path:'search/:value', component:MenuComponent},
    ]
  },
  {path:'eat/:name/:id', component:RecipeDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }