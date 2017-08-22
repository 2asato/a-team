const express = require('express');
const router = express.Router();
const Characters = require('../models/characters.js');

router.get('/', (req, res)=>{
    Characters.find({}, (err, foundCharacters)=>{
        res.json(foundCharacters);
    });
});

router.post('/', (req, res)=>{
    Characters.create(req.body, (err, createdCharacter)=>{
        res.json(createdCharacter);
    });
});

router.delete('/:id', (req, res)=>{
    Characters.findByIdAndRemove(req.params.id, (err, deletedCharacter)=>{
        res.json(deletedCharacter);
  });
});

router.put('/:id', (req, res)=>{
    Characters.findByIdAndUpdate(req.params.id, req.body, (err, updatedCharacter)=>{
        res.json(updatedCharacter);
    });
});

module.exports = router;
