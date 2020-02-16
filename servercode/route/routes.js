var express = require('express');
var router = express.Router();

const Item =require('../model/shoppingitem')

router.get('/items', (req,res,next)=> {
   
    Item.find(function(err,items){
        if (err) {
            res.json(err);
        }
        else{
            res.json(items);
        }
})
});

router.post('/items', (req,res,next)=> {
   
    let newShoppingItem=new Item({

        itemName : req.body.itemName,
        itemQuantite :req.body.itemQuantite,
        itemAchete :req.body.itemAchete
    });
     newShoppingItem.save((err,item)=>{
         if(err){
             res.json(err)
         }
         else{
             res.json({msg:'item has been added to db '});
         }
     })
});

router.delete('/items/:id', (req,res,next)=> {
    Item.remove({_id: req.params.id},
        function(err,results){
        if(err){
            res.json(err)
        }
        else{
            res.json(results);
        }
    })
 });

 router.put('/items/:id', (req,res,next)=> {
    
    Item.findOneAndUpdate({_id: req.params.id},{

        $set:   {
            itemName : req.body.itemName,
            itemQuantite :req.body.itemQuantite,
            itemAchete :req.body.itemAchete
        }
    }),

    function(err,results){
        if(err){
            res.json(err)
        }
        else{
            res.json(results);
        }
    }
 });


module.exports=router ;