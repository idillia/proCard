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

export function loadProfiles() {
  return dispatch => {
    dispatch(beginAjaxCall());
    rootRef.once("value").then(function(snapshot) {

      let profiles = snapshot.child("users").val();
      dispatch(loadProfilesSuccess(profiles));
    }).catch(error => {
      throw(error);
    });
  };
}

// UNCOMMENT FUNCTION BELOW TO USE MOCKUP DATA

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


