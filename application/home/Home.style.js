import { StyleSheet } from "react-native";
import * as Font from 'expo-font';
import {LocaleConfig} from 'react-native-calendars';

const loadCustomFonts = async () => {
    await Font.loadAsync({
      'CustomSunny': require('../../assets/fonts/Sunny_Spells.ttf'),
      // Add more fonts if needed
    });
  };
  
  // Call the loadCustomFonts function
  loadCustomFonts();


const styles = StyleSheet.create({
    containerHome: {
        backgroundColor: '#FEC8D8',
        flex: 1,
       
    },
    calendarText: {
        marginTop: 20,
        marginBottom: 20,
        fontSize: 50,
        textAlign: 'center',
        fontFamily: 'CustomSunny',
        letterSpacing: 2,
    },
    calendarContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    calendar: {
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 3,
        width: 300,
    },
    copyright: {
        position: 'abslute',
        bottom: -80
    }
});

export default styles;