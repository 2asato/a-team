const express = require('express');
const router = express.Router();

const characterInfo = require('../models/characters.js');
//the below seeds the batabase with a nice set of character information along with some pics and vids related to the characters in the show
const newCharacterInfo = [
	{ characterName: 'Colonel John Hannibal Smith',
    actorName:'George Peppard',
    catchphrase:'I love it when a plan comes together',
    rank:'Lieutenant Colonel',
    quirk:'disguises',
		video: 'https://www.youtube.com/watch?v=FPQlXNH36mI',
		pic:'https://upload.wikimedia.org/wikipedia/en/8/80/Liam_Neeson_as_Hannibal_Smith_2010.jpg'
  },
  {
    characterName: 'Templeton Peck "Face/Faceman"',
    actorName:'Dirk Benedict',
    catchphrase:"Where's the plan boss?",
    rank:'Lieutenant',
    quirk:'con man',
		video: "https://www.youtube.com/watch?v=rljZg1APPJs",
		pic:'https://68.media.tumblr.com/70df4def8f5683abcf6811f6b2b3121e/tumblr_mjxm75b8VY1qd569mo1_500.png'
  },
  {
    characterName: 'Howling Mad Murock',
    actorName:'Dwight Schultz',
    catchphrase:"This is bat shit insane! It's perfect",
    rank:'Captain',
    quirk:'pilot',
		video:'https://www.youtube.com/watch?v=xa0XDcAadxk',
		pic:'https://upload.wikimedia.org/wikipedia/en/8/8b/Sharlto_Copley_as_H.M._Murdock_2010.jpg'
  },
  {
    characterName: 'Bosco BA Baracus',
    actorName:'Mr T',
    catchphrase:"I pitty da foo!",
    rank:'Sergeant',
    quirk:'Mechanic/muscle',
		video:'https://www.youtube.com/watch?v=qElfxPJY7tk',
		pic:'http://media.gettyimages.com/photos/season-1-pictured-mr-t-as-sgt-bosco-ba-baracus-photo-by-frank-photo-picture-id140939160'
  }];
	//the below function puts the character data from this file into the router and tells the database to save the information in this file to the database. 
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
