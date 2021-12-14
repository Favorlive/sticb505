import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './component/auth/auth.component';
import { DeclarationCampComponent } from './component/declaration-camp/declaration-camp.component';
import { DemandeSubsideComponent } from './component/demande-subside/demande-subside.component';
import { InscriptionUniteComponent } from './component/inscription-unite/inscription-unite.component';
import { ReponseSubsideComponent } from './component/reponse-subside/reponse-subside.component';

const routes: Routes = [
  { path: 'auth', component: AuthComponent},
  { path: 'unite', component: InscriptionUniteComponent},
  { path: 'camp', component: DeclarationCampComponent},
  { path: 'subside', component: DemandeSubsideComponent},
  { path: 'reponse', component: ReponseSubsideComponent},
  { path: '', component: AuthComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
