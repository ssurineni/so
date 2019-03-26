import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Card extends Component {
  render () {
    return (
      <View style={styles.cardContainer}>
        <Text style={styles.textCard}>
          {this.props.meetingTitle}
        </Text>
        
        <View style={{flex: 1,justifyContent: 'flex-end'}}>
        <View style={styles.hashtag}>
          <Text style={styles.textHastag}> 
            #{this.props.projectTitle}
          </Text>
        </View>
          <View style={styles.divider}/>
          <Text style={styles.textTime}>
            {this.props.startTime}
          </Text>
          <Text style={styles.textTime}>
            {this.props.endTime}
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    padding:10,
    margin:5,
    height:150,
    width:170,
    borderWidth: 3,
    borderColor: '#7EB72E',
    backgroundColor: 'transparent',
    borderRadius: 15
  },
  textCard: {
    fontSize:16,
    color: 'white'
  },
  hashtag: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    height:20,
    width:50,
    marginTop:5
  },
  textHastag: {
    fontSize:12,
  },
  divider: {
    borderBottomWidth: 1,
    padding:7,
    borderBottomColor: 'white',
  },
  textTime:{
    fontSize:15,
    paddingTop:10
  },
});

export default Card;