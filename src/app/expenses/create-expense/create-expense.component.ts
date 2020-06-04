import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ExpenseService} from '../../expense.service';
@Component({
  selector: 'app-create-expense',
  templateUrl: './create-expense.component.html',
  styleUrls: ['./create-expense.component.css']
})
export class CreateExpenseComponent implements OnInit {

  createForm: FormGroup;

  constructor(private expenseService:ExpenseService, private fb:FormBuilder,private router:Router) {
   this.createForm = this.fb.group({
     title:['',Validators.required],
     category:'',
     month:'',
     amount:'',
     date:''
   });
  }
  addExpense(title,category,month,amount,date){
    this.expenseService.addExpense(title,category,month,amount,date).subscribe
    (()=>{
      this.router.navigate(['/list']);
    });
  }
  ngOnInit() {
  }

}
