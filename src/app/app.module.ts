import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleChartsModule } from 'angular-google-charts';
/* import { ChartsModule } from 'ng2-charts'; */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsPopupComponent } from './components/details-popup/details-popup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { SitoutPedaComponent } from './components/sitout-peda/sitout-peda.component';
import { HomeComponent } from './components/home/home.component';
import { MyDashboardComponent } from './components/my-dashboard/my-dashboard.component';
import { FootballComponent } from './components/my-dashboard/football/football.component';
import { CricketComponent } from './components/my-dashboard/cricket/cricket.component';
import { ChartsModule, WavesModule } from 'angular-bootstrap-md';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    AppComponent,
    DetailsPopupComponent,
    SitoutPedaComponent,
    HomeComponent,
    MyDashboardComponent,
    FootballComponent,
    CricketComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    GoogleChartsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatInputModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  entryComponents:[DetailsPopupComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
