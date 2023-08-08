import React, { useState } from 'react';
import { View, TextInput, Button, Alert, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../header/Header';
import styles from './EditContactScreen.style';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';

const EditContactScreen = ({ route, navigation }) => {
  const { contact } = route.params;
  const [name, setName] = useState(contact.name);
  const [birthday, setBirthday] = useState(contact.birthday);
  const [interests, setInterests] = useState(contact.interests);

  const [isDatePickerVisible, setDatePickerVisible] = useState(false); // Estado para el modal del selector de fecha

  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  const handleDateConfirm = (date) => {
    // Formatea la fecha seleccionada utilizando moment
    const formattedDate = moment(date).format('DD-MM-YYYY');
    setBirthday(formattedDate);
    hideDatePicker();
  };

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
        const index = contacts.findIndex((c) => c.id === updatedContact.id);
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
    <View style={styles.container}>
      <Header />
      <View style={styles.dataContainer}>

        <View style={styles.dataMiniContainer}>
          <Text style={styles.textRighter}>Name:</Text>

          <TextInput
            style={styles.input}
            placeholder="Nombre"
            value={name}
            onChangeText={text => setName(text)}
          />
        </View>

        <View style={{ height: 15 }} />

         <View style={styles.dataMiniContainer}>
          <Text style={styles.textRighter}>Birthday Date:</Text>
          <TouchableOpacity style={styles.input} onPress={showDatePicker}>
            <Text >{birthday}</Text>
          </TouchableOpacity>
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
        <Button title="Save contact" onPress={saveContact} />
      </View>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleDateConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

export default EditContactScreen;
