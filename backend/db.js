const mongoose = require('mongoose');
mongoose.set('strictQuery', false)
// const mongoUri ="mongodb://0.0.0.0:27017/FoodApp"
const mongoUri ="mongodb+srv://clboy768:KSbdln4Jjon0Ltrl@restaurant.ykcocab.mongodb.net/FoodApp?retryWrites=true&w=majority"
const connectToMongo= async()=>{
   await mongoose.connect(mongoUri)
        console.log("connected to mongoose successfully")
    }
    
module.exports= connectToMongo;