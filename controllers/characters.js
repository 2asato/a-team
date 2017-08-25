const express = require('express');
const router = express.Router();
const Characters = require('../models/characters.js');

// character by id route
router.get('/:id', (req, res)=>{
	 Characters.findById(req.params.id, req.body, (err, foundCharacter)=>{
		   res.json(foundCharacter);
	});
});

// get character route
router.get('/', (req, res)=>{
    Characters.find({}, (err, foundCharacters)=>{
        res.json(foundCharacters);
    });
});

// create character route
router.post('/', (req, res)=>{
    Characters.create(req.body, (err, createdCharacter)=>{
        res.json(createdCharacter);
    });
});

router.post('/episode', (req, res)=>{
    Characters.find({ '_id' : { $in: req.body.chars }
        }, function(err, docs){
             res.json(docs);
    });
});

// delete character route
router.delete('/:id', (req, res)=>{
    Characters.findByIdAndRemove(req.params.id, (err, deletedCharacter)=>{
        res.json(deletedCharacter);
  });
});

// update character route
router.put('/:id', (req, res)=>{
    Characters.findByIdAndUpdate(req.params.id, req.body, (err, updatedCharacter)=>{
        res.json(updatedCharacter);
    });
});

module.exports = router;
