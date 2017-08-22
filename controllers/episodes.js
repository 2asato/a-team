const express = require('express');
const router = express.Router();
const Episodes = require('../models/episodes.js');

router.get('/:id', (req, res)=>{
	 Episodes.findById(req.params.id, req.body, (err, foundEpisode)=>{
		   res.json(foundEpisode);
	});
});

router.get('/', (req, res)=>{
    Episodes.find({}, (err, foundEpisodes)=>{
        res.json(foundEpisodes);
    });
});

router.post('/', (req, res)=>{
    Episodes.create(req.body, (err, createdEpisode)=>{
        res.json(createdEpisode);
    });
});

router.delete('/:id', (req, res)=>{
    Episodes.findByIdAndRemove(req.params.id, (err, deletedEpisode)=>{
        res.json(deletedEpisode);
  });
});

router.put('/:id', (req, res)=>{
    Episodes.findByIdAndUpdate(req.params.id, req.body, (err, updatedEpisode)=>{
        res.json(updatedEpisode);
    });
});

module.exports = router;
