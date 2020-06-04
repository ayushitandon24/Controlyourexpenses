import { Component, OnInit } from '@angular/core';
import { ExpenseService} from '../../expense.service';
import { Router,ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Expense}  from '../../expense.model';
@Component({
  selector: 'app-edit-expense',
  templateUrl: './edit-expense.component.html',
  styleUrls: ['./edit-expense.component.css']
})
export class EditExpenseComponent implements OnInit {
  id:String;
  expense: any={};
  updateForm: FormGroup;

  constructor(private expenseService:ExpenseService, private router:Router,private route:ActivatedRoute,private snackBar:MatSnackBar,private fb:FormBuilder) {
    this.createForm();

    }
    createForm(){
    this.updateForm = this.fb.group({
      title:['',Validators.required],
      category:'',
      month:'',
      amount:'',
      date:''
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.id=params.id;
      this.expenseService.getExpenseById(this.id).subscribe(res=>{
        this.expense=res;
        this.updateForm.get('title').setValue(this.expense.title);
        this.updateForm.get('category').setValue(this.expense.category);
        this.updateForm.get('month').setValue(this.expense.month);
        this.updateForm.get('amount').setValue(this.expense.amount);
        this.updateForm.get('date').setValue(this.expense.date);

      });
    });
  }
  updateExpense(title,category,month,amount,date){
this.expenseService.updateExpense(this.id,title,category,month,amount,date).subscribe(()=>{
  this.snackBar.open(' Expense Updated Successfully','OK',{
    duration:3000
  });
});
  }

}
