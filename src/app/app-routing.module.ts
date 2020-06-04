import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyChartComponent } from './my-chart/my-chart.component';


const routes: Routes = [
  {path:'http://localhost:4000/expenses', component:MyChartComponent},
  {path:'**', component:MyChartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
