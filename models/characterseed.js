const express = require('express');
const router = express.Router();

const characterInfo = require('../models/characters.js');

const newCharacterInfo = [
	{ characterName: 'Colonel John Hannibal Smith',
    actorName:'George Peppard',
    catchphrase:'I love it when a plan comes together',
    rank:'Lieutenant Colonel',
    quirk:'disguises',
		video: 'https://www.youtube.com/watch?v=FPQlXNH36mI',
		pic:'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjCl8u6tu7VAhVCHGMKHbdSCZoQjRwIBw&url=https%3A%2F%2Fcarboncostume.com%2Fjohn-hannibal-smith%2F&psig=AFQjCNHDUNdVERxnMU577jWgaaZRwetJmw&ust=1503614443793790'
  },
  {
    characterName: 'Templeton Peck "Face/Faceman"',
    actorName:'Dirk Benedict',
    catchphrase:"Where's the plan boss?",
    rank:'Lieutenant',
    quirk:'con man',
		video: "https://www.youtube.com/watch?v=rljZg1APPJs",
		pic:'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjayrnktu7VAhVB32MKHQEqBQIQjRwIBw&url=https%3A%2F%2Fcomicvine.gamespot.com%2Ffaceman%2F4005-50610%2Fimages%2F&psig=AFQjCNFAbgcTPwM6AgDU_KHsncRXdiYq4A&ust=1503614526596715'
  },
  {
    characterName: 'Howling Mad Murock',
    actorName:'Dwight Schultz',
    catchphrase:"This is bat shit insane! It's perfect",
    rank:'Captain',
    quirk:'pilot',
		video:'https://www.youtube.com/watch?v=xa0XDcAadxk',
		pic:'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwit9pnPtu7VAhVXzGMKHRwaDfQQjRwIBw&url=http%3A%2F%2Funiversalprotectioncouncil.wikia.com%2Fwiki%2FHM_Murdock&psig=AFQjCNGHEKP6ZbHamSDGtBUWDTX8SzowJw&ust=1503614488754863'
  },
  {
    characterName: 'Bosco BA Baracus',
    actorName:'Mr T',
    catchphrase:"I pitty da foo!",
    rank:'Sergeant',
    quirk:'Mechanic/muscle',
		video:'https://www.youtube.com/watch?v=qElfxPJY7tk',
		pic:'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwitlKqhtu7VAhUM02MKHUp-Cs8QjRwIBw&url=https%3A%2F%2Fcomicvine.gamespot.com%2Fb-a-baracus%2F4005-50611%2F&psig=AFQjCNHSXtETL5jNmI8j1si1sl7sRYFBAQ&ust=1503614376480023'
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
