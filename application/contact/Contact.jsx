import { View, Text, Button, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../header/Header';
import styles from './Contact.style';
import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


function HomeScreen() {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [photo, setPhoto] = useState('');
  const [birthday, setBirthday] = useState('');
  const [interests, setInterests] = useState('');

  const handleSaveContact = async () => {
    try {
      // Obtén la lista actual de contactos almacenados en AsyncStorage
      const contacts = await AsyncStorage.getItem('contacts');
      let parsedContacts = [];
      if (contacts) {
        parsedContacts = JSON.parse(contacts);
      }

      // Crea un nuevo objeto de contacto
      const newContact = {
        name,
        photo,
        birthday,
        interests,
      };

      // Agrega el nuevo contacto a la lista
      parsedContacts.push(newContact);

      // Guarda la lista actualizada de contactos en AsyncStorage
      await AsyncStorage.setItem('contacts', JSON.stringify(parsedContacts));

      // Reinicia los valores de los campos de entrada
      setName('');
      setPhoto('');
      setBirthday('');
      setInterests('');

      // Puedes mostrar una notificación o redirigir a otra pantalla después de guardar exitosamente el contacto
    } catch (error) {
      console.log('Error al guardar el contacto:', error);
    }
  };


  return (
    <View>
       <Header />
          <View>
              <Text> Photo </Text>
              <TextInput
                style={styles.input}
                placeholder="Photo"
                value={photo}
                onChangeText={setPhoto}
              />
              <Text> Name </Text>
              <TextInput
                style={styles.input}
                placeholder="name"
                value={name}
                onChangeText={setName}
              />
              <Text> Birthday date </Text>
              <TextInput
                style={styles.input}
                placeholder="Birthday date"
                value={birthday}
                onChangeText={setBirthday}
              />
              <Text> Personal interests </Text>
              <TextInput
                style={styles.input}
                placeholder="Personal interests"
                value={interests}
                onChangeText={setInterests}
              />
            <Button title="Save contact" onPress={handleSaveContact} />
        </View>  
    </View>
  );
}

export default HomeScreen;