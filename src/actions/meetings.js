import {
    FILL_MEETING_DATA,
    CREATE_MEETING
} from './types';
// import createMeeting from './createMeeting';

export const meetingDetailPageFill = (index) => {
    return {
        type: FILL_MEETING_DATA, 
        // payload: meetingsData[index]
    }
}

export const createMeeting = (startTime, endTime, roomNumber, meetingTitle, projectTitle) => {
    return {
        type: CREATE_MEETING, 
        startTime: startTime,
        endTime: endTime,
        roomNumber: roomNumber,
        meetingTitle: meetingTitle,
        projectTitle: projectTitle
    }
}

