
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../header/Header';
import styles from './Home.style';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import React, { useState } from 'react';


function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.containerHome}>
    <Header/>
     <View style={ styles.calendarContainer }>
          <Text style={styles.calendarText}>Calendar</Text>

      
          <Calendar 
          style={ styles.calendar}
          firstDay= {1}
          hideExtraDays= {true}
          theme={{
            calendarBackground: 'pink',
            arrowColor: 'red',
            textDayFontSize: 25
          }}
          
          />
      </View>

      <View style={styles.copyright}>
        <Text > GitHub: @Shaekhrom</Text>
      </View>
      
    </View>
  );
}

export default Home;