import delay from './delay';
import PsycheData from './../../psyche.json'; 
import _ from 'underscore';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.

const profiles = [
 {
   "id": 216464650,
   "screen_name": "YesAlIngles",
   "name": "Yes al Inglés",
   "followers": 396,
   "creation_date": "Tue Nov 16 20:12:20 +0000 2010",
   "personal_archetype": [],
   "strength_words": [],
   "personal_archetype_blend_sentences": [],
   "image_url": "http://pbs.twimg.com/profile_images/529379255549820928/7u3Nn5GU_normal.jpeg",
   "tweets": "[\"Nov 2, 2016 4:30 PM\",\"Nov 1, 2016 4:30 PM\",\"Nov 1, 2016 9:30 AM\",\"Oct 31, 2016 4:30 PM\",\"Oct 31, 2016 9:31 AM\",\"Oct 31, 2016 7:30 AM\",\"Oct 31, 2016 7:30 AM\",\"Oct 30, 2016 2:45 PM\",\"Oct 29, 2016 1:40 PM\",\"Oct 28, 2016 4:40 PM\",\"Oct 28, 2016 9:31 AM\",\"Oct 27, 2016 4:40 PM\",\"Oct 27, 2016 9:31 AM\",\"Oct 26, 2016 5:01 PM\",\"Oct 26, 2016 9:31 AM\",\"Oct 25, 2016 4:35 PM\",\"Oct 24, 2016 4:40 PM\",\"Oct 24, 2016 9:31 AM\",\"Oct 23, 2016 4:30 PM\",\"Oct 23, 2016 1:30 PM\",\"Oct 22, 2016 4:30 PM\",\"Oct 22, 2016 9:55 AM\",\"Oct 21, 2016 4:30 PM\",\"Oct 20, 2016 4:30 PM\",\"Oct 20, 2016 12:31 PM\",\"Oct 20, 2016 9:31 AM\",\"Oct 19, 2016 4:30 PM\",\"Oct 19, 2016 1:31 PM\",\"Oct 19, 2016 9:31 AM\",\"Oct 19, 2016 7:31 AM\",\"Oct 18, 2016 4:30 PM\",\"Oct 18, 2016 12:20 PM\",\"Oct 18, 2016 10:08 AM\",\"Oct 18, 2016 6:02 AM\",\"Oct 17, 2016 4:30 PM\"]"
 },
 {
   "id": 18199479,
   "screen_name": "BCSCInvestRight",
   "name": "BCSC InvestRight",
   "followers": 832,
   "creation_date": "Wed Dec 17 20:55:16 +0000 2008",
   "personal_archetype": [],
   "strength_words": [],
   "personal_archetype_blend_sentences": [],
   "image_url": "http://pbs.twimg.com/profile_images/519990129927012352/4uq42UNp_normal.jpeg",
   "tweets": "[\"Nov 2, 2016 4:30 PM\",\"Nov 2, 2016 10:55 AM\",\"Nov 2, 2016 7:30 AM\",\"Nov 1, 2016 4:35 PM\",\"Nov 1, 2016 8:35 AM\",\"Nov 1, 2016 8:31 AM\",\"Oct 31, 2016 8:50 AM\",\"Oct 30, 2016 3:35 PM\",\"Oct 30, 2016 11:30 AM\",\"Oct 29, 2016 3:50 PM\",\"Oct 29, 2016 9:45 AM\",\"Oct 28, 2016 4:10 PM\",\"Oct 28, 2016 3:10 PM\",\"Oct 28, 2016 11:15 AM\",\"Oct 27, 2016 4:05 PM\",\"Oct 27, 2016 2:21 PM\",\"Oct 27, 2016 11:20 AM\",\"Oct 27, 2016 9:05 AM\",\"Oct 27, 2016 8:05 AM\",\"Oct 26, 2016 3:29 PM\",\"Oct 26, 2016 10:10 AM\",\"Oct 25, 2016 4:30 PM\",\"Oct 25, 2016 11:20 AM\",\"Oct 25, 2016 8:16 AM\",\"Oct 24, 2016 5:40 PM\",\"Oct 24, 2016 1:15 PM\",\"Oct 24, 2016 8:20 AM\",\"Oct 23, 2016 9:30 AM\",\"Oct 22, 2016 3:05 PM\",\"Oct 22, 2016 9:25 AM\",\"Oct 21, 2016 2:20 PM\",\"Oct 21, 2016 11:50 AM\",\"Oct 21, 2016 9:02 AM\",\"Oct 20, 2016 9:25 AM\",\"Oct 20, 2016 8:55 AM\"]"
 }
];

let generatePersonalArchetypes = function(personalTypes) {
  let threeTypes = _.sample(personalTypes, 3);
  while (threeTypes.length !== new Set(threeTypes).size) {
    threeTypes = _.sample(personalTypes, 3);
  }
  return threeTypes;
};

let generateStrengthWords = function(StrengthWords) {
  let fiveWords =  _.sample(StrengthWords, 5);
  while (fiveWords.length !== new Set(fiveWords).size) {
    fiveWords = _.sample(StrengthWords, 5);
  }
  return fiveWords;
};

let getBlendSentence = function(personalTypes,blendSentences) {
  let threeTypes, regexThreeTypes, sentenceIsFound0, sentenceIsFound1, sentenceIsFound2, regexSentence, profileSentenceKey;
  let types = generatePersonalArchetypes(personalTypes);
  let invertedTypes = _.invert(personalTypes);

  threeTypes = _.map(types, function(item) {return invertedTypes[item].slice(0, -1)});
  regexThreeTypes = _.map(threeTypes, function(item) {return new RegExp(item)});

  let sentencesKyes = _.keys(blendSentences);

  sentenceIsFound0 = _.filter(sentencesKyes, function(item) {
    return item.match(regexThreeTypes[0]);
  })  

  sentenceIsFound1 = _.filter(sentenceIsFound0, function(item) {
    return item.match(regexThreeTypes[1]);
  })

  sentenceIsFound2 = _.filter(sentenceIsFound1, function(item) {
    return item.match(regexThreeTypes[2]);
  })
  
  regexSentence = /user_sentence_n/;

  profileSentenceKey = _.filter(sentenceIsFound2, function(item) {return item.match(regexSentence)})[0];
  return blendSentences[profileSentenceKey];
};


let filloutProfiles = function(json, pa, sw, pabs, personalTypes,blendSentences){
  for(var i = 0; i<=json.length; i++) {
    for(var key in json[i]) {
      if(key == pa) {
        json[i][pa].push(generatePersonalArchetypes(personalTypes));
      }
      else if(key == sw) {
        json[i][sw].push(generateStrengthWords(personalTypes));
      }
      else if(key === pabs) {
        json[i][pabs].push(getBlendSentence(personalTypes,blendSentences));
      }
    }
  }
}

filloutProfiles(profiles, "personal_archetype", "strength_words", "personal_archetype_blend_sentences", PsycheData.PersonalArchetypes, PsycheData.PersonalArchetypesBlendSentences);



console.log(profiles);

class ProfileApi {
  static getAllProfiles() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], profiles));
      }, delay);
    });
  }


}

export default ProfileApi;