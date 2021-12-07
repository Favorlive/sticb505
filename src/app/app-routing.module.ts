import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './component/auth/auth.component';
import { DeclarationCampComponent } from './component/declaration-camp/declaration-camp.component';
import { DemandeSubsideComponent } from './component/demande-subside/demande-subside.component';
import { InscriptionUniteComponent } from './component/inscription-unite/inscription-unite.component';

const routes: Routes = [
{ path: 'InscriptionUnite', component: InscriptionUniteComponent},
{ path: 'DeclarationCamp', component: DeclarationCampComponent},
{ path: 'DemandeSubside', component: DemandeSubsideComponent},
{ path: 'Authentification', component: AuthComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
