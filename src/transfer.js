import db from "../config/database.js";

const checkUser = (email) => {
    var result = [];
    db('users')
      .select({
        id: 'id'
      })
      .where({email: param.email})
      .then((data)=>{
        if(data?.length < 1){
            result = false;
        }else {
            result = data[0];
        }
      })
      .catch((err)=>{
        result = false;
      })
}

const checkBalance = (email) => {
    var result = [];
    db('account')
      .select({
        balance: 'balance'
      })
      .where({email: param.email})
      .then((data) => {
        if(data?.length < 1){
            result = {"success":false, "message": "Unknown Receiver"};
        }else {

        }
      })
      .catch((err)=>{
        result = {"success":false, "message": "An Error Occurred ,Please try again"};
      })
}
const transfer = async (param, payload) => {
var result, user = [];
user = checkUser(payload.email);
if(user){
  if(user.trx_code == param.pin){

  }else {
    result = {"success":false, "message": "Incorrect Pin ,Please try again"};
  }
}else{
    result = {"success":false, "message": "An Error Occurred ,Please try again"}; 
}
}
export default transfer;