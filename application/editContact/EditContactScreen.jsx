import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../header/Header';

const EditContactScreen = ({ route, navigation }) => {
  const { contact } = route.params;
  const [name, setName] = useState(contact.name);
  const [birthday, setBirthday] = useState(contact.birthday);
  const [interests, setInterests] = useState(contact.interests);

  const saveContact = async () => {
    try {
      const updatedContact = { ...contact, name, birthday, interests };
      const updatedContacts = await updateContactList(updatedContact);
      await AsyncStorage.setItem('contacts', JSON.stringify(updatedContacts));
      Alert.alert('Contacto actualizado correctamente');
      navigation.goBack();
    } catch (error) {
      console.log(error);
      Alert.alert('Error al actualizar el contacto');
    }
  };

  const updateContactList = async (updatedContact) => {
    try {
      const storedContacts = await AsyncStorage.getItem('contacts');
      let contacts = [];
      if (storedContacts) {
        contacts = JSON.parse(storedContacts);
        const index = contacts.findIndex((c) => c.name === updatedContact.name);
        if (index !== -1) {
          contacts[index] = updatedContact;
        }
      } else {
        contacts.push(updatedContact);
      }
      return contacts;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  return (
    <View>
      <Header/>
      <TextInput
        placeholder="Nombre"
        value={name}
        onChangeText={text => setName(text)}
      />
      <TextInput
        placeholder="Fecha de cumpleaños"
        value={birthday}
        onChangeText={text => setBirthday(text)}
      />
      <TextInput
        placeholder="Personal preferences"
        value={interests}
        onChangeText={text => setInterests(text)}
      />
      <Button title="Guardar contacto" onPress={saveContact} />
    </View>
  );
};

export default EditContactScreen;
