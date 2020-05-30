import mongoose from 'mongoose';
const Schema=mongoose.Schema;

let Expense = new Schema({
  title:{
    type:String
  },
  category:{
    type:String
  },
  amount:{
    type:String
  },
  month:{
    type:String
  },
  Date:
  {
    type:Date
  }


//   timestamps: { currentTime: () => Math.floor(Date.now() / 1000)
// }
});
export default mongoose.model('Expense', Expense);
