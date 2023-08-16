import React, { useState, useEffect  } from 'react';
import { View, TextInput, Button, Alert, Text, TouchableOpacity  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../header/Header';
import styles from './newEvent.style';
import { Notifications } from 'expo';
import DateTimePickerModal from 'react-native-modal-datetime-picker';


function HomeScreen() {
  const navigation = useNavigation();
    useEffect(() => {
      const getDataLength = async () => {
        try {
          const keys = await AsyncStorage.getAllKeys();
          setDataLength(keys.length);
        } catch (error) {
          console.log(error);
        }
      };

      getDataLength();
    }, []);

    const [dataLength, setDataLength] = useState(0);

    const [name, setName] = useState('');
    const [date, setDate] = useState(null);
    const [isDatePickerVisible, setDatePickerVisible] = useState(false);
    const [desc, setDesc] = useState('');

    const showDatePicker = () => {
      setDatePickerVisible(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisible(false);
    };
  
    const handleDateConfirm = (date) => {
      hideDatePicker();
      setDate(date);
    };

    useEffect(() => {
      navigation.addListener('focus', resetForm);
    }, [navigation]);

    const resetForm = () => {
      setName('');
      setDate('');
      setDesc('');
    };

    const generateUniqueKey = () => {
      const timestamp = Date.now().toString(); // Obtiene la fecha actual como una cadena de texto
      const randomString = Math.random().toString(36).substring(2); // Genera una cadena aleatoria
      const uniqueKey = randomString + timestamp;
      return uniqueKey;
    };
    
    const uniqueKey = generateUniqueKey();

    const saveEvent = async () => {
      try {
        let storedEvents = await AsyncStorage.getItem('events');
        let events = [];
        if (storedEvents) {
          events = JSON.parse(storedEvents);
        }
  
        const day = date.getDate();
        const month = date.getMonth() + 1; 
        const year = date.getFullYear();
  
        
        const newEvent = {
          id: uniqueKey,
          name,
          date: `${day}-${month}-${year}`, 
          desc
        };
        
        events.push(newEvent);
        await AsyncStorage.setItem('events', JSON.stringify(events));
        
        Alert.alert('Event saved succesfully');
        resetForm();
        navigation.navigate('Events'); 
      } catch (error) {
        console.log(error);
        Alert.alert('Error!');
      }
    };


    return (
      <View style={styles.container}>
        <Header/>
        <View >
          <View style={styles.dataContainer}>
            <View style={styles.dataMiniContainer}>
              <Text style={styles.textRighter}>Name:</Text>
              <TextInput
                style={styles.input}
                placeholder="Name"
                value={name}
                onChangeText={text => setName(text)}
              />
            </View>  
  
            <View style={{ height: 15 }} />
  
            <View style={styles.dataMiniContainer}>
                <Text style={styles.textRighter}>Event Date:</Text>
                <TouchableOpacity style={styles.input} onPress={showDatePicker}>
                  <View>
                    <Text style={styles.interactiveText}> 
                      {date ? date.toDateString() : 'Tap to select event date'}
                    </Text>
                  </View>
                </TouchableOpacity>
                <DateTimePickerModal
                
                  isVisible={isDatePickerVisible}
                  mode="date"
                  onConfirm={handleDateConfirm}
                  onCancel={hideDatePicker}
                />
              </View>
  
            <View style={{ height: 15 }} />
  
            <View style={styles.dataMiniContainer}>
              <Text style={styles.textRighter}>Event description:</Text>
              <TextInput
                style={styles.input}
                placeholder="Event description"
                value={desc}
                onChangeText={text => setDesc(text)}
              />
            </View>
          </View>
          <Button title="Save event" onPress={saveEvent} />
  
         
        </View>
      </View>
    );
}

export default HomeScreen;