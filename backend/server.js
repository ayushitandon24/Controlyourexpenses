import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import Expense from './models/Expense';
import { onErrorResumeNext } from 'rxjs';


const app=express();
const router =express.Router();
// var path = require("path");
// var Router = require('./modules/router/router');
// // var router = new router(path.join(__dirname,'routes'));
app.use(cors());
app.use(bodyParser.json());
mongoose.connect('mongodb://localhost:27017/expenses');
const connection=mongoose.connection;
connection.once('open',()=>{
  console.log('MongoDb data connection established successfully');
});

router.route('/expenses').get((req,res)=>{
  Expense.find((err,expenses)=>{
    if(err)
    console.log(err);
    else
    res.json(expenses);
  });
});

router.route('/expenses/:id').get((req,res)=>
{
  Expense.findById(req.params.id,(err,expense)=>
  {
    if(err)
    console.log(err);
    else
    res.json(expense);
  });
});

router.route('/expenses/add').post((req,res)=>  {
  let expense = new Expense(req.body);
  expense.save()
        .then(expense=>{
              res.status(200).json({'expense':'Added successfully'});
})
.catch(err =>{
  res.status(400).send('Failed to create a new record');
});
});

router.route('expenses/upadte/:id').post((req,res)=>{
  Expense.findById(req.params.id,(err,expense)=>{
    if(!expense)
    return next(new Error('Could not load document'));
    else{
    expense.title=req.body.title;
    expense.category=req.body.category;
    expense.amount=req.body.amount;
    expense.month=req.body.month;
    expense.date=req.body.date;
    expense.save().then(issue=>{
      res.json('Update done');

    }).catch(err =>{
      res.status(400).send('Update failed');
    });
  }
  });
});

router.route('/expenses/delete/:id').get((req,res)=>{
  Expense.findByIdAndRemove({_id:req.params.id},(err,expense)=>{
    if(err)
    res.json(err);
    else
    res.json('Removed sucessfully');
  });
});

app.use('/',router);

// app.get('/',(req,res) => res.send('Hello World'));
 app.listen(4000, ()=>console.log('express server is running on port 4000'));
