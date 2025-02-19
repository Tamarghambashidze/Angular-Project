import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { FormsModule } from '@angular/forms';
import { LogInComponent } from './log-in/log-in.component';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactComponent } from './contact/contact.component';
import { CardsAreaComponent } from './cards-area/cards-area.component';
import { DetailsComponent } from './details/details.component';
import { FooterComponent } from './footer/footer.component';
import { EatComponent } from './eat/eat.component';
import { StarsRatingComponent } from './stars-rating/stars-rating.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { MenuComponent } from './menu/menu.component';
import { FavouritesComponent } from './favourites/favourites.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    LogInComponent,
    NavBarComponent,
    HomePageComponent,
    ContactComponent,
    CardsAreaComponent,
    DetailsComponent,
    FooterComponent,
    EatComponent,
    StarsRatingComponent,
    RecipeDetailsComponent,
    MenuComponent,
    FavouritesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
