import React, { useState } from 'react';
import { View, TextInput, Button, Alert, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../header/Header';
import styles from './EditEventScreen.style';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';

const EditEventScreen = ({ route, navigation }) => {
  const { event } = route.params;
  const [name, setName] = useState(event.name);
  const [date, setDate] = useState(event.date);
  const [desc, setDesc] = useState(event.desc);

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
    setDate(formattedDate);
    hideDatePicker();
  };

  const saveEvent = async () => {
    try {
      const updatedEvent = { ...event, name, date, desc };
      const updatedEvents = await updateEventList(updatedEvent);
      await AsyncStorage.setItem('events', JSON.stringify(updatedEvents));
      Alert.alert('Contacto actualizado correctamente');
      navigation.goBack();
    } catch (error) {
      console.log(error);
      Alert.alert('Error al actualizar el contacto');
    }
  };

  const updateEventList = async (updatedEvent) => {
    try {
      const storedEvents = await AsyncStorage.getItem('events');
      let events = [];
      if (storedEvents) {
        events = JSON.parse(storedEvents);
        const index = events.findIndex((e) => e.id === updatedEvent.id);
        if (index !== -1) {
          events[index] = updatedEvent;
        }
      } else {
        events.push(updatedEvent);
      }
      return events;
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
          <Text style={styles.textRighter}>Event date:</Text>
          <TouchableOpacity style={styles.input} onPress={showDatePicker}>
            <Text >{date}</Text>
          </TouchableOpacity>
        </View>

        <View style={{ height: 15 }} />

        <View style={styles.dataMiniContainer}>
          <Text style={styles.textRighter}>Event Description:</Text>
          <TextInput
            style={styles.input}
            placeholder="Description"
            value={desc}
            onChangeText={text => setDesc(text)}
          />
        </View>
        <Button title="Save event" onPress={saveEvent} />
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

export default EditEventScreen;
