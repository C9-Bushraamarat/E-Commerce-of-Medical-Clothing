const mongoose=require("mongoose");
const DBname="ShopDB"

mongoose
.connect(`mongodb://127.0.0.1:27017/${DBname}`)
.then(() => {
  console.log(`DB ${DBname} Ready To Use`);
})
.catch((err) => {
  console.log(err);
});