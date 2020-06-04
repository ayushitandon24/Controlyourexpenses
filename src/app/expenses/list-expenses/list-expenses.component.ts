import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { Expense} from '../../expense.model';
import { ExpenseService} from '../../expense.service';
@Component({
  selector: 'app-list-expenses',
  templateUrl: './list-expenses.component.html',
  styleUrls: ['./list-expenses.component.css']
})
export class ListExpensesComponent implements OnInit {

expenses: Expense[];
displayedColumns =['title','category','month','amount','date','actions'];


  constructor(private expenseService:ExpenseService, private router:Router) { }

  ngOnInit() {

this.fetchExpenses();
    // this.expenseService.getExpenses().subscribe((expenses)=>
    // {
    //   console.log(expenses);
    // });
  }
  fetchExpenses(){
    this.expenseService
    .getExpenses()
    .subscribe((data: Expense[])=> {
      this.expenses=data;
      console.log('Data requested...');
      console.log(this.expenses);
    });
  }
editExpense(id){
  this.router.navigate([`/edit/${id}`]);
}
deleteExpense(id){
  this.expenseService.deleteExpense(id).subscribe(()=>{
    this.fetchExpenses();
  });
}

}
