import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateExpenseComponent } from './expenses/create-expense/create-expense.component';
import { EditExpenseComponent } from './expenses/edit-expense/edit-expense.component';
import { ListExpensesComponent } from './expenses/list-expenses/list-expenses.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatDividerModule} from '@angular/material/divider';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartService} from './chart.service';


import { ExpenseService} from './expense.service';
import { BarchartComponent } from './barchart/barchart.component';
import { MyChartComponent } from './my-chart/my-chart.component';
import { ChartsModule} from 'ng2-charts';
const routes: Routes =[
  {path:'create',component:CreateExpenseComponent},
  {path:'edit/:id',component:EditExpenseComponent},
  {path:'list', component:ListExpensesComponent},
  // {path:'',redirectTo:'list',pathMatch:'full'}
]
@NgModule({
  declarations: [
    AppComponent,
    CreateExpenseComponent,
    EditExpenseComponent,
    ListExpensesComponent,
    BarchartComponent,
    MyChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSnackBarModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule,
    ReactiveFormsModule,
    ChartsModule,
    RouterModule.forRoot(routes)

  ],
  providers: [ ExpenseService,ChartService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
