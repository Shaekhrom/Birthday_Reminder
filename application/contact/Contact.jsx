import React, { useState, useEffect  } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../header/Header';
import { useNavigation } from '@react-navigation/native';

const CreateContactScreen = () => {
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    navigation.addListener('focus', resetForm);
  }, [navigation]);

  const resetForm = () => {
    setName('');
    setBirthday('');
  };

  const saveContact = async () => {
    try {
      const contact = { name, birthday };
      let storedContacts = await AsyncStorage.getItem('contacts');
      let contacts = [];
      if (storedContacts) {
        contacts = JSON.parse(storedContacts);
      }
      contacts.push(contact);
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
      <Button title="Guardar contacto" onPress={saveContact} />
    </View>
  );
};

export default CreateContactScreen;
