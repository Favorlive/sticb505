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
import { FormsModule } from '@angular/forms';
import { UniteDataService } from './services/UniteDataService';
import { CampDataService } from './services/CampDataService';
import { EnfantDataService } from './services/EnfantDataService';
import { SubsideDataService } from './services/SubsideDataService';
import { UtilisateurDataService } from './services/UtilisateurDataService';
import { ReponseSubsideComponent } from './component/reponse-subside/reponse-subside.component';


@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    HeadbarComponent,
    ProgressbarComponent,
    AuthComponent,
    InscriptionUniteComponent,
    DeclarationCampComponent,
    DemandeSubsideComponent,
    ReponseSubsideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    UniteDataService,
    CampDataService,
    EnfantDataService,
    SubsideDataService,
    UtilisateurDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
