import Firebase from 'firebase';
import * as types from './actionTypes';
import profileApi from '../api/mockProfileApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

const firebaseProfiles = new Firebase("https://twittercali-ec41d.firebaseio.com/")

//Function below is action creater func and types.LOAD_PROFILES_SUCCESS is an action
export function loadProfilesSuccess(profiles) {
  return {type: types.LOAD_PROFILES_SUCCESS, profiles};
}


//Function below is a thunk it returns another function
export function loadProfiles() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return profileApi.getAllProfiles().then(profiles => {
      dispatch(loadProfilesSuccess(profiles));
    }).catch(error => {
      throw(error);
    });
  };
}
