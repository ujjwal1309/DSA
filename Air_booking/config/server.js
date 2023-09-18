const mongoose=require("mongoose");


const connection=mongoose.connect("mongodb+srv://ujjwal:ujjwal@cluster0.2qw5x.mongodb.net/airbooking");

module.exports={connection};