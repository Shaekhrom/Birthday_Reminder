import React, { useState, useEffect  } from 'react';
import { View, TextInput, Button, Alert, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../header/Header';
import { useNavigation } from '@react-navigation/native';
import styles from './Contact.style';
import { v4 as uuidv4 } from 'uuid';

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
  const [birthday, setBirthday] = useState('');
  const [interests, setInterests] = useState('');
  const navigation = useNavigation();

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
      
      const newContact = {
        id: uniqueKey,
        name,
        birthday,
        interests
      };
      
      contacts.push(newContact);
      await AsyncStorage.setItem('contacts', JSON.stringify(contacts));
      
      Alert.alert('Contacto guardado correctamente');
      resetForm();
      navigation.navigate('ContactList'); // Redirigir a la pantalla de lista
    } catch (error) {
      console.log(error);
      Alert.alert('Error al guardar el contacto');
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
            <TextInput
              style={styles.input}
              placeholder="Birthday Date"
              value={birthday}
              onChangeText={text => setBirthday(text)}
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
