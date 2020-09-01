import React, { Component } from 'react';
import {StyleSheet, Image} from 'react-native';
import { Text, View, Header, Title, Button} from 'native-base';
import {Actions} from 'react-native-router-flux';
export default class StudentDashboard extends Component {
  
  render() {
    return (
      <>
      <Header>
        <Title style={{margin:10}}>Welcome Amit</Title>
      </Header>
      <View style={{flex: 1, flexDirection: 'row', justifyContent:'space-between'}}>
          <Button 
            style={{flex:1, flexDirection:'column' ,width: "48%", height: "98%", alignItems:'center', backgroundColor:'none'}}
            onPress={()=>Actions.StudentEducationPortal()}
            >
          <Image
            style={{width:"100%", height:"80%",resizeMode:"contain"}}
            source={require('./../images/educationportal.png')}
          />
          <Text style={{textAlign: 'center', fontSize:20, color:'black'}}>Education Portal</Text>
          </Button>
          <Button 
          style={{flex:1, flexDirection:'column' ,width: "48%", height: "98%", alignItems:'center', backgroundColor:'none'}}
          onPress={()=>Actions.StudentHomework()}
          >   
          <Image
              style={{width:"90%", height:"90%", resizeMode:'contain'}}
              source={require('./../images/homework.png')}
            />
          <Text style={{textAlign: 'center', fontSize:20, color:'black'}}>Home work</Text>
        </Button>
      </View>
      <View style={{flex: 1, flexDirection: 'row', justifyContent:'space-between'}}>
      <Button 
      style={{flex:1, flexDirection:'column' ,width: "48%", height: "98%", alignItems:'center', backgroundColor:'none'}}
      onPress={()=>Actions.StudentAttendance()}
      >
            <Image
              style={{width:"90%", height:"90%", resizeMode:'contain'}}
              source={require('./../images/attendance.jpg')}
            />
          <Text style={{textAlign: 'center', fontSize:20, color:'black'}}>Attendance</Text>
        </Button>
        <Button 
        style={{flex:1, flexDirection:'column' ,width: "48%", height: "98%", alignItems:'center', backgroundColor:'none'}}
        onPress={()=>Actions.StudentProfile()}
        >
          <Image
              style={{width:"90%", height:"90%", resizeMode:'contain'}}
              source={require('./../images/profile.png')}
            />
          <Text style={{textAlign: 'center', fontSize:20, color:'black'}}>Profile</Text>
        </Button>
      </View>
    </>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  backgroundContainer: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  bakcgroundImage: {
    flex: 1,
    width: null,
    height: null,
  },
  input: {
    margin: 15,
    height: 50,
    width: '100%',
    borderColor: 'white',
    borderBottomWidth: 1,
    color: 'white',
  },
  submitButton: {
    padding: 10,
    margin: 15,
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
  },
  formContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '70%',
  },
  heading: {
    color: 'white',
    fontSize: 40,
  },
  submitButtonText: {
    color: 'white',
  },
});
