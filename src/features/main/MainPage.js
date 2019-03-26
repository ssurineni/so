import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import {Card} from '@components';
import {Icon} from 'react-native-elements';
import {meetingsData} from '../../actions/meetingsData';
import moment from 'moment';
import {DETAIL} from '@navigation/screenName';
import {CREATEMEETING} from '@navigation/screenName';
import {createMeeting} from "@actions/index";

//To navigate to Detail

const numColumns = 2;
const currentDate = new Date();
const today = currentDate;
const date = moment(today).format("MMMM D YYYY");
const comparedDate = moment(today).format("l");

class MainPage extends Component {
    state = {
    }
    
    navigateTo = (route) => {
        this.props.navigateTo(route);
    }
    
    renderCard = ({item}) => {
        return(
            <TouchableOpacity
                onPress={()=>this.navigateTo(DETAIL)}
            >
                <Card
                    meetingTitle={item.endTime}
                    projectTitle={item.projectTitle}
                    startTime={item.startTime}
                    endTime={item.endTime}
                    // checkin
                />
            </TouchableOpacity>
        )
    }
    
    render() {
        return (
            <View>
                <View style={{alignItems:'flex-end', paddingRight: 20, paddingBottom:30}}>
                    <Text style={styles.yourlocation}>You're in Deloitte 200</Text>
                </View>
                <View style={{paddingLeft:15, paddingRight:15}}>
                    <View style={{flexDirection: 'row', justifyContent:'space-between', alignItems:'center'}}>
                        <Text style={styles.yourmeeting}>Your meetings</Text>
                        <TouchableOpacity
                            onPress={()=>this.navigateTo(CREATEMEETING)}
                            style={{justifyContent:'flex-start'}}
                        >
                            <Icon
                                name="plus-circle"
                                type="font-awesome"
                                size={30}
                                color="#7EB72E"
                                fill="white"
                            />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.todays}>Today, {date}</Text>
                </View>
                <FlatList
                    contentContainerStyle={styles.listCardView}
                    data={this.props.meeting}
                    // keyExtractor = {item => item.meetingId}
                    numColumns={numColumns}
                    renderItem={this.renderCard}
                />
            </View>
        )
    }
}

const styles=StyleSheet.create({
    floatingButton: {
        resizeMode: 'contain',
        width: 50,
        height: 50,
    },
    floatingButtonStyle: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        right: 35,
        bottom: 50,
    },
    listCardView:{
        padding:7
    },
    yourlocation:{
        fontWeight: '300',
        lineHeight: 18,
        fontSize: 14,
        color: 'white',
    },
    yourmeeting:{
        fontWeight: '600',
        lineHeight: 27,
        fontSize: 16,
        color: 'white',
        paddingBottom:10
    },
    todays:{
        fontWeight: '400',
        lineHeight: 23,
        fontSize: 13,
        color: 'white',
        paddingBottom:10
    },
    tomorrow:{
        fontWeight: '400',
        lineHeight: 23,
        fontSize: 13,
        color: 'white',
        paddingBottom:10
    }
});

const mapStateToProps = state => {
    return {
        meeting: state.meeting.meeting,
    };
};

export default connect(mapStateToProps)(MainPage);