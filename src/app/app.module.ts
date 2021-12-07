import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';
import { HeadbarComponent } from './component/headbar/headbar.component';
import { ProgressbarComponent } from './component/progressbar/progressbar.component';
import { AuthComponent } from './component/auth/auth.component';
import { InscriptionUniteComponent } from './component/inscription-unite/inscription-unite.component';
import { DeclarationCampComponent } from './component/declaration-camp/declaration-camp.component';
import { DemandeSubsideComponent } from './component/demande-subside/demande-subside.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Routes } from '@angular/router';
import { UniteDataService } from './services/UniteDataService';

const appRoutes: Routes =[

]

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
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [
    UniteDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
