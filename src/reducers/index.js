import {combineReducers} from 'redux';
import authReducer from '@reducers/auth';
import detailReducer from '@reducers/detail';
import meetingReducer from '@reducers/createMeeting';
import {reducer as formReducer} from 'redux-form';

export default combineReducers({
    auth: authReducer,
    detail: detailReducer,
    meeting: meetingReducer,
    form: formReducer
})