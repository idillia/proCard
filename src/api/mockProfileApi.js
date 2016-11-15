import delay from './delay';
import PsycheData from './../../psyche.json'; 
import _ from 'underscore';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.


console.log(PsycheData);
// console.log(PsycheData);



let generatePersonalArchetypes = function(personalTypes) {
  let ar = [1,2,3, 4, 5];
  return ar[_.random(0,ar.length -1)];
  // return personalTypes.PersonalArchetypes[_.random(personalTypes.PersonalArchetypes - 1)]
};

console.log(generatePersonalArchetypes(PsycheData));




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