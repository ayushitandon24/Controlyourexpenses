const mongoose = require("mongoose");

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
  date:
  {
    type:String
  }


//   timestamps: { currentTime: () => Math.floor(Date.now() / 1000)
// }
});
module.exports = mongoose.model('Expense', Expense);
