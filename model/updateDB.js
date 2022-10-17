import { response } from "express";
import db from "../config/database.js";

const updateDB = (table,payload,arg) => {
var response;
    db(table)
    .update(payload)
    .where(arg)
    .then((data) => {
        response = {"success": true, "data": data}; 
    })
    .catch((err) => {
        response = {"success": false, "message": "An error occurred, please try again later."}; 
    })
    

}

export default updateDB;