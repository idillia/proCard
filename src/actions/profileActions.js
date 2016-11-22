// var firebase = require("firebase/app");
// require("firebase/auth");
// require("firebase/database");
import * as types from './actionTypes';
import profileApi from '../api/mockProfileApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

import * as firebase from  'firebase';
import config from './../../firebaseConfig';


firebase.initializeApp(config);

let rootRef = firebase.database().ref();


//Function below is action creater func and types.LOAD_PROFILES_SUCCESS is an action
export function loadProfilesSuccess(profiles) {
  return {type: types.LOAD_PROFILES_SUCCESS, profiles};
}


// Function below is a thunk it returns another function

// export function loadProfiles() {
//   return dispatch => {
//     dispatch(beginAjaxCall());
//     return profileApi.getAllProfiles().then(profiles => {
//       console.log("mockProf", profiles);

//       // console.log("mockProf", JSON.parse(profiles));
//       dispatch(loadProfilesSuccess(profiles));
//     }).catch(error => {
//       throw(error);
//     });
//   };
// }

export function loadProfiles() {
  return dispatch => {
    dispatch(beginAjaxCall());
    rootRef.once("value").then(function(snapshot) {

      let profiles = snapshot.child("users").val();
         console.log("profile", profiles);
      dispatch(loadProfilesSuccess(profiles));
    }).catch(error => {
      throw(error);
    });
  };
}


