import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CricketComponent } from './components/my-dashboard/cricket/cricket.component';
import { FootballComponent } from './components/my-dashboard/football/football.component';
import { MyDashboardComponent } from './components/my-dashboard/my-dashboard.component';
import { SitoutPedaComponent } from './components/sitout-peda/sitout-peda.component';

const routes: Routes = [
  {path:'sitoutPeda', component:SitoutPedaComponent},
  /* { path: '',   redirectTo: '/home', pathMatch: 'full' },  */
  {path:'home', component:HomeComponent},
  {path:'myDashboard', component:MyDashboardComponent, children:[
    {
      path:'football',
      component:FootballComponent
    },
    {
      path:'cricket',
      component:CricketComponent
    }
  ]},
  {path:'**', component:HomeComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
