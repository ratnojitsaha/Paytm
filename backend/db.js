    const mongoose = require("mongoose");

    const connectToMongo = async()=>{
        try{
            await mongoose.connect(`mongodb+srv://saharatnojit04:qeeXK5fZSVNl3Hx9@cluster0.ghgg6r0.mongodb.net/paytm`,{
                useNewUrlParser: true,
            });  
        }catch(err){
            console.log(`error to connection to MondgoDB, ${err.message}`);
        }
    }

    connectToMongo();

    //schemas for user table........

    const userSchema = new mongoose.Schema({
        username:{
            type:String,
            required : true,
            unique : true,
            lowercase : true,
            minLength : 3,
            maxLength : 30
        },
        first_name : {
            type : String,
            required : true,
            maxLength : 30
        },
        last_name : {
            type : String,
            required : true,
            maxLength : 30
        },
        email : {
            type : String,
            required : true
        },
        password : {
            type : String,
            required : true,
            minLength : 3
        },

    });

    const User = mongoose.model("User",userSchema);

    module.exports = {
        User
    }


