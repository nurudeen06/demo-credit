import { response } from "express";
import db from "../config/database.js";

const updateDB = (table,payload,arg) => {
var response;
    db(table)
    .update(payload)
    .where(arg)
    .then((data) => {
        response = data; 
    })
    .catch((err) => {
        response
    })
    

}

export default updateDB;