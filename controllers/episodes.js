const express = require('express');
const router = express.Router();
const Episodes = require('../models/episodes.js');
const Characters = require('../models/characters.js');

// episode by id route
router.get('/:id', (req, res)=>{
	 Episodes.findById(req.params.id, req.body, (err, foundEpisode)=>{
		   res.json(foundEpisode);
    });
});

//  get episode route
router.get('/', (req, res)=>{
    Episodes.find({}, (err, foundEpisodes)=>{
        res.json(foundEpisodes);
    });
});

// create episode route
router.post('/', (req, res)=>{
    Episodes.create(req.body, (err, createdEpisode)=>{
        res.json(createdEpisode);
    });
});

// add character to episode route
router.post('/:epid/:charid', (req, res)=>{
    Characters.findById(req.params.charid, (err, foundCharacter)=>{
        Episodes.findById(req.params.epid, (err, foundEpisode)=>{
                foundEpisode.characters.push(foundCharacter);
                foundEpisode.save((data, err) => {
                    res.json(foundEpisode);
            })
        });
    });
});

// delete episode route
router.delete('/:id', (req, res)=>{
    Episodes.findByIdAndRemove(req.params.id, (err, deletedEpisode)=>{
        res.json(deletedEpisode);
    });
});

// update episode route
router.put('/:id', (req, res)=>{
    Episodes.findByIdAndUpdate(req.params.id, req.body, (err, updatedEpisode)=>{
        res.json(updatedEpisode);
    });
});

module.exports = router;
