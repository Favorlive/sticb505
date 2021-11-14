import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';
import { HeadbarComponent } from './headbar/headbar.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { AuthComponent } from './auth/auth.component';
import { InscriptionUniteComponent } from './inscription-unite/inscription-unite.component';
import { DeclarationCampComponent } from './declaration-camp/declaration-camp.component';
import { DemandeSubsideComponent } from './demande-subside/demande-subside.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    HeadbarComponent,
    ProgressbarComponent,
    AuthComponent,
    InscriptionUniteComponent,
    DeclarationCampComponent,
    DemandeSubsideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
