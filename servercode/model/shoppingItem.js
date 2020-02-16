const mongoose = require('mongoose');

const shoppingItemShema = mongoose.Schema({

    itemName: {
        type :String, 
        required:true
    },

    itemQuantite: {
        type:Number,
        required:true
    }, 

    itemAchete: {
        type:Boolean,
        required:true
    }
})
const Item= module.exports= mongoose.model('Item' , shoppingItemShema);