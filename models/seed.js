const express = require('express');
const router = express.Router();

const characterInfo = require('../models/seed.js');

const newCharacterInfo = [
	{ characterName: 'Colonel John Hannibal Smith',
    actorName:'George Peppard',
    catchphrase:'I love it when a plan comes together',
    rank:'Lieutenant Colonel',
    quirk:'disguises'
  },
  {
    characterName: 'Templeton Peck "Face/Faceman"',
    actorName:'Dirk Benedict',
    catchphrase:"Where's the plan boss?",
    rank:'Lieutenant',
    quirk:'con man'
  },
  {
    characterName: 'Howling Mad Murock',
    actorName:'Dwight Schultz',
    catchphrase:"This is bat shit insance! It's perfect",
    rank:'Captain',
    quirk:'pilot'
  },
  {
    characterName: 'Bosco BA Baracus',
    actorName:'Mr T',
    catchphrase:"I pitty da foo!",
    rank:'Sergeant',
    quirk:'Mechanic/muscle'
  }];
  router.get('/', (req, res)=>{
    characterInfo.create(newCharacterInfo, function(err){
      if(err){
        console.log(err);
      res.send('Error seeding characters');
    }else{
      console.log('Seeding Characters successful');
      res.redirect('/');
    }
    });
  });
  module.exports = router;
