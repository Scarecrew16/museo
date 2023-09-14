import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
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




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    VisitComponent,
    DirectionsComponent,
    CollectionComponent,
    PermanentComponent,
    AboutComponent,
    ExhibitsComponent,
    ActivitiesComponent,
    MuseumComponent,
    HistoryComponent,
    IghndComponent,
    InProgressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
