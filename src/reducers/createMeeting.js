import {CREATE_MEETING} from '@actions/types';

const INITIAL_STATE = {
  meeting: [],
};

export default reducer = (state=INITIAL_STATE, action) => {
  const {type, payload} = action;
  switch (type) {
    case CREATE_MEETING:
      return {
        ...state,
        meeting: state.meeting.concat ({
          startTime: payload.startTime,
          endTime: payload.endTime,
          roomNumber: payload.roomNumber,
          meetingTitle: payload.meetingTime,
          projectTitle: payload.projectTitle
        }),
      };
    default:
      return state;
  }
};