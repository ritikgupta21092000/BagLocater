import React from "react";
import { View, Text, StyleSheet, Pressable, Linking } from "react-native";
import { Table, Rows } from 'react-native-table-component';
import { useSelector } from "react-redux";

function AfterScanComponent({navigation}) {
    var details = {
      name: "",
      email: "",
      flightNumber: "",
      phoneNumber: "",
      baggageNumber: "",
      departureAirport: "",
      arrivalAirport: "",
      departureDate: "",
      arrivalDate: "",
    }
    const passengerDetail = useSelector((state) => {
      details = {name: state.PassengerReducer.name, email: state.PassengerReducer.email, flightNumber: state.PassengerReducer.flightNumber, phoneNumber: state.PassengerReducer.phoneNumber, baggageNumber: state.PassengerReducer.baggageNumber, departureAirport: state.PassengerReducer.departureAirport, arrivalAirport: state.PassengerReducer.arrivalAirport, departureDate: state.PassengerReducer.departureDate, arrivalDate: state.PassengerReducer.arrivalDate};
    })

    function callOwner(){
      Linking.openURL(`tel:${details.phoneNumber}`)
    }
  
    function AddLostFound(){
      navigation.navigate('AddLostFound')
    }

    tableData = [
      ['Name',details.name],
      ['Email', details.email],
      ['Flight No.',details.flightNumber],
      ['Baggage No.',details.baggageNumber],
      ['Departure Airport',details.departureAirport],
      ['Arrival Airport',details.arrivalAirport],
      ['Departure Date', details.departureDate],
      ['Arrival Date', details.arrivalDate],
    ]
    return (
    <View style={styles.container}>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Rows data={tableData} textStyle={styles.text}/>
        </Table>

        <Pressable style={[styles.btnStyle,styles.callOwnerBtn]} onPress={callOwner} >
          <Text style={styles.btnText}>Call Owner</Text>
        </Pressable>

        <Pressable style={[styles.btnStyle,styles.addLostFoundBtn]} onPress={AddLostFound} >
          <Text style={styles.btnText}>Add to Lost & Found</Text>
        </Pressable>
    </View>
     );
}


const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 },
  callOwnerBtn : {
    backgroundColor: '#009387',
  },
  btnText:{
    color:'white',
    fontSize: 18
  },
  addLostFoundBtn:{
    backgroundColor: '#21c92b',
  },
  btnStyle:{
    marginTop:25,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 28,
    borderRadius: 8,
    elevation: 3,
  }


});

export default AfterScanComponent;