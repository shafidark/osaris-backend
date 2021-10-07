/*
    *Title: slider data 
    *description: this is the slider data app
    *Author: Md Abdullah Al shafi
    *Email:shafi29.dev.bd@gmail.com
    *Date: 07/10/2021
*/

// dependesis
const express = require('express');
const router = express.Router();
const sliderSchema = require('../Schemas/sliderSchema')
const moongose = require('mongoose')
// route worker
// get route
router.get('/', (req, res) => {

});
// get by id
router.get('/:id', (req, res) => {

});

// post route
router.post('/', async (req, res) => {
    try{
        const Category = new moongose.model(req.body.cat, sliderSchema);
        const newCategory = new Category(req.body);
        await newCategory.save((err) => {
            if (err) {
                res.status(500).json({err: "there was a server site error"});
            } else {
                res.status(200).json({message: "Post successfully"});
            }
        })
    }
    catch{
        res.status(500).send('there was an error')
    }

});

// updateRoute


// route export
module.exports = router;

