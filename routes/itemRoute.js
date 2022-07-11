const express = require("express");
const router = express.Router();
const Item = require('../models/itemModel')



router.get("/getallitems", async(req,res)=>{

    try {
        const items = await Item.find({})
        res.send(items)
    } catch (error) {
        return res.status(400).json({message: error});
    }
});

router.post("/add", async (req, res) => {
    const { title, date, description } = req.body

    const newItem = new Item({ title, date, description })
    try {
        newItem.save()
        res.send('Item added successfully');
    } catch (error) {
        return res.status(400).json({ message: error });

    }
});

router.put('/getallitems/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['title','date','description']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
  
    if(!isValidOperation){
  
      res.status(400).send({error: 'Invalid Updates'})
  
    }
  
    try{
  
      const newItem = await Item.findOne({ _id: req.params.id})    
  
      if (!newItem) {
        res.status(404).send('Item not updated')
      }
      
      updates.forEach((update) => newItem[update] = req.body[update])
      await newItem.save()
  
      res.send(newItem)
    } catch(e) {
      res.status(400).send()
    } 
  })

  router.delete('/getallitems/:id',  async (req, res) => {
    try{
      const item = await Item.findOneAndDelete({_id: req.params.id})
      res.send('Item Deleted successfully');
  
      if(!item) {
        res.status(404).send()
      }
  
      res.send(item)
  
    } catch(error) {
      return res.status(400).json({ message: error });
    }
  })

module.exports = router;