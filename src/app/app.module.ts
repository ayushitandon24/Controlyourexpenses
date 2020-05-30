import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateExpenseComponent } from './expenses/create-expense/create-expense.component';
import { EditExpenseComponent } from './expenses/edit-expense/edit-expense.component';
import { ListExpensesComponent } from './expenses/list-expenses/list-expenses.component';
import {MatToolbarModule} from '@angular/material/toolbar';

const routes: Routes =[
  {path:'create',component:CreateExpenseComponent},
  {path:'edit/:id',component:EditExpenseComponent},
  {path:'list', component:ListExpensesComponent},
  {path:'',redirectTo:'list',pathMatch:'full'}
]
@NgModule({
  declarations: [
    AppComponent,
    CreateExpenseComponent,
    EditExpenseComponent,
    ListExpensesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
