import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { VisitComponent } from './pages/visit/visit.component';
import { DirectionsComponent } from './pages/visit/directions/directions.component';
import { CollectionComponent } from './pages/collection/collection.component';
import { PermanentComponent } from './pages/collection/permanent/permanent.component';
import { AboutComponent } from './pages/collection/about/about.component';
import { ExhibitsComponent } from './pages/exhibits/exhibits.component';
import { ActivitiesComponent } from './pages/activities/activities.component';
import { MuseumComponent } from './pages/museum/museum.component';
import { HistoryComponent } from './pages/museum/history/history.component';
import { IghndComponent } from './pages/museum/ighnd/ighnd.component';
import { InProgressComponent } from './in-progress/in-progress.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/inicio'},
  {path: 'inicio', component:HomeComponent},
  {path: 'visita', component:VisitComponent},
  {path: 'visita/como-llegar', component:DirectionsComponent},
  {path: 'coleccion', component:CollectionComponent},
  {path: 'coleccion/coleccion-permanente', component:PermanentComponent},
  {path: 'coleccion/historia-de-la-coleccion', component:AboutComponent},
  {path: 'exposiciones', component:ExhibitsComponent},
  {path: 'actividades', component:ActivitiesComponent},
  {path: 'acerca-museo', component:MuseumComponent},
  {path: 'acerca-museo/historia', component:HistoryComponent},
  {path: 'acerca-museo/IGHNDAC', component:IghndComponent},
  {path: 'no-disponible', component:InProgressComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
