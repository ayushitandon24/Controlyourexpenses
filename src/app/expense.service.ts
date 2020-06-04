import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  uri = 'http://localhost:4000';

  constructor(private http:HttpClient) { }
  getExpenses()
  {
    return this.http.get(`${this.uri}/expenses`);
  }

  getExpenseById(id)
  {
    return this.http.get(`${this.uri}/expenses/${id}`);
  }

  addExpense(title, category, month, amount,date)
  {
    const expense ={
      title:title,
      category:category,
      month:month,
      amount:amount,
      date:date
    };
    return this.http.post(`${this.uri}/expenses/add`,expense);
  }
  updateExpense(id,title, category, month, amount,date)
  {
    const expense ={
      title:title,
      category:category,
      month:month,
      amount:amount,
      date:date
    };
    return this.http.post(`${this.uri}/expenses/update/${id}`,expense);
  }

deleteExpense(id)
{
  return this.http.get(`${this.uri}/expenses/delete/${id}`);
}
}
