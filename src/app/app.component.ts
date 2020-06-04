import { Component } from '@angular/core';
import { ChartService} from './chart.service';
import { Chart} from 'chart.js';
import 'rxjs/Rx';


import { map } from 'rxjs/operators';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  chart:any;
  constructor(private _chart:ChartService){ }
  title = 'YouareBroke';

  ngOnInit()
  {
    this._chart.expensesinTotal().subscribe(res=>{
      let category=res['lists'].map(res=>res.main.category)
      let month=res['lists'].map(res=>res.main.month)
     let amount=res['lists'].map(res=>res.main.amount)
     let alldates=res['lists'].map(res=>res.main.date)

    })
    this.chart=new Chart('canvas',{
      type:data
    // this._chart.expensesinTotal()
    // .subscribe(res =>{
    //

    //  let expensesDates=[]
    //  alldates.forEach(res => {
    //    let jsdate=new Date(res *1000)
    //    expensesDates.push(jsdate.toLocaleDateString('en',{year:'numeric',month:'short',day:'numeirc'}))

    //  })
    //  console.log(expensesDates)

    // })
  }
}
