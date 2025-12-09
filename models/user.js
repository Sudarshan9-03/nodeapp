const mongoose = require("mongoose");


const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },


    email: {
      type: String,
      required: true,
      unique: true,
      validate:{
        validator:function(value){
          return value.includes("@")&&value.includes(".");
        },
        message:"Invalid email format. Email mut contain @ and .",
      },
    },


    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);


const User = mongoose.model("User", userSchema);


module.exports = User;
 