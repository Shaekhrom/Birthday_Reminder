import React, { useState, useEffect  } from 'react';
import { View, TextInput, Button, Alert, Text, TouchableOpacity  } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../header/Header';
import { useNavigation } from '@react-navigation/native';
import styles from './Contact.style';
import { v4 as uuidv4 } from 'uuid';
import DateTimePickerModal from 'react-native-modal-datetime-picker';


const CreateContactScreen = () => {
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
  const [birthday, setBirthday] = useState(null);
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [interests, setInterests] = useState('');
  const navigation = useNavigation();

  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  const handleDateConfirm = (date) => {
    hideDatePicker();
    setBirthday(date);
  };

  useEffect(() => {
    navigation.addListener('focus', resetForm);
  }, [navigation]);

 

  const resetForm = () => {
    setName('');
    setBirthday('');
    setInterests('');
  };

  const generateUniqueKey = () => {
    const timestamp = Date.now().toString(); // Obtiene la fecha actual como una cadena de texto
    const randomString = Math.random().toString(36).substring(2); // Genera una cadena aleatoria
    const uniqueKey = timestamp + randomString;
    return uniqueKey;
  };
  
  const uniqueKey = generateUniqueKey();




  const saveContact = async () => {
    try {
      let storedContacts = await AsyncStorage.getItem('contacts');
      let contacts = [];
      if (storedContacts) {
        contacts = JSON.parse(storedContacts);
      }

      const day = birthday.getDate();
      const month = birthday.getMonth() + 1; 
      const year = birthday.getFullYear();

      
      const newContact = {
        id: uniqueKey,
        name,
        birthday: `${day}-${month}-${year}`, 
        interests
      };
      
      contacts.push(newContact);
      await AsyncStorage.setItem('contacts', JSON.stringify(contacts));
      
      Alert.alert('Contact saved succesfully');
      resetForm();
      navigation.navigate('ContactList'); 
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
              <Text style={styles.textRighter}>Birthday Date:</Text>
              <TouchableOpacity style={styles.input} onPress={showDatePicker}>
                <View>
                  <Text style={styles.interactiveText}> 
                    {birthday ? birthday.toDateString() : 'Tap to select birthday'}
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
            <Text style={styles.textRighter}>Personal interests:</Text>
            <TextInput
              style={styles.input}
              placeholder="Personal preferences"
              value={interests}
              onChangeText={text => setInterests(text)}
            />
          </View>
        </View>
        <Button title="Save contact" onPress={saveContact} />

       
      </View>
    </View>
  );
};

export default CreateContactScreen;
