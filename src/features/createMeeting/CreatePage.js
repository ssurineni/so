// Create page would be my SharePlace screen
// Replicate whatever is in the awesome-place project in here

import React, {Component} from 'react';
import { colors, dimensions } from "@styles/base";
import {View, Text, TouchableOpacity, Dimensions, StyleSheet} from 'react-native';
import {Button, Input} from '@components';
import { connect } from 'react-redux';

import {MAIN_S} from '@navigation/screenName';

class CreatePage extends Component {
  state = {
  }

  navigateTo = (route) => {
    this.props.navigateTo(route);
  }
  
  startTimeChangedHandler = val => {
    this.setState({
      startTime: val
    })
  }
  endTimeChangedHandler = val => {
    this.setState({
      endTime: val
    })
  }
  roomNumberChangedHandler = val => {
    this.setState({
      roomNumber: val
    })
  }
  meetingTitleChangedHandler = val => {
    this.setState({
      meetingTitle: val
    })
  }
  projectTitleChangedHandler = val => {
    this.setState({
      projectTitle: val
    })
  }

  meetingAddedHandler = () => {
    if (this.state.startTime.trim() !== "") {
      this.props.onAddMeeting(
        this.state.startTime,
        this.state.endTime,
        this.state.roomNumber,
        this.state.meetingTitle,
        this.state.projectTitle
      );
    }
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Text style={{color: 'white', padding:40}}>Create Meeting</Text>
        <View style={{justifyContent: 'center', alignItems:'center'}}>
          {/* meetingName:Redux */}
          <Input
            title="Start time"
            startTime={this.state.startTime}
            onChangeText={this.startTimeChangedHandler}
          />
          <Input 
            title="End time"
            endTime={this.state.endTime}
            onChangeText={this.endTimeChangedHandler}
            />
          <Input 
            title="Room"
            roomNumber={this.state.roomNumber}
            onChangeText={this.roomNumberChangedHandler}
          />
          <Input 
            title="Title"
            meetingTitle={this.state.meetingTitle}
            onChangeText={this.meetingTitleChangedHandler}
          />
          <Input 
            title="Project"
            projectTitle={this.state.projectTitle}
            onChangeText={this.projectTitleChangedHandler}
          />
        </View>
        <View style={style.addContainer}>
          <TouchableOpacity
            onPress={
              this.meetingAddedHandler
              // this.addCardToMainScreen
              // ()=>this.navigateTo(MAIN_S)
            }
          >  
            <View style={style.addView}>
              <Text style={style.addText}>
                Add
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const style=StyleSheet.create({
  addContainer:{
    width: Dimensions.get('window').width *2/10,
    marginLeft:250,
    paddingTop:10
  },
  addView:{
    backgroundColor:'#7EB72E',
    alignItems:'flex-end',
    paddingTop:10, 
    paddingBottom:10,
    paddingLeft:20,
    paddingRight:20, 
    borderRadius:20,
  },
  addText:{
    color:'white',
    fontSize:18
  }
});

const mapDispatchToProps = dispatch => {
  return {
    onAddMeeting: (startTime, endTime, roomNumber, meetingTitle, projectTitle) => dispatch(createMeeting(startTime, endTime, roomNumber, meetingTitle, projectTitle)),
  };
};

export default connect(null, mapDispatchToProps)(CreatePage);
// export default CreatePage;