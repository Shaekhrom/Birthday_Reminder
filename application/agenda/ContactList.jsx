import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../header/Header';
import { useNavigation } from '@react-navigation/native';
import styles from './ContactList.style';

const ContactListScreen = ({ navigation }) => {
  const [contacts, setContacts] = useState([]);
  
  
  
  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    navigation.addListener('focus', loadData);
  }, [navigation]);

  const loadData = async () => {
    try {
      const storedContacts = await AsyncStorage.getItem('contacts');
      if (storedContacts) {
        setContacts(JSON.parse(storedContacts));
      }
    } catch (error) {
      console.log(error);
      Alert.alert('Error al cargar los contactos');
    }
  };

  const handleEditContact = (contact) => {
    navigation.navigate('EditContact', { contact });
  };

  const renderContact = ({ item }) => (
    <View>
    <TouchableOpacity onPress={() => handleEditContact(item)}>
      <Text>{item.name}</Text>
      <Text>{item.birthday}</Text>
    </TouchableOpacity>
    <Button
    title="Eliminar"
    onPress={() => handleDeleteContact(item)}
  />
    </View>
  );

  const handleDeleteContact = async (contact) => {
    try {
      let storedContacts = await AsyncStorage.getItem('contacts');
      let contacts = [];
      if (storedContacts) {
        contacts = JSON.parse(storedContacts);
        contacts = contacts.filter((c) => c.name !== contact.name);
        await AsyncStorage.setItem('contacts', JSON.stringify(contacts));
        Alert.alert('Contacto eliminado correctamente');
        loadData();
      }
    } catch (error) {
      console.log(error);
      Alert.alert('Error al eliminar el contacto');
    }
  };

  return (
    <View>
      <Header/>
      <Button
        title="Añadir contacto"
        onPress={() => navigation.navigate('CreateContact')}
      />
      <FlatList
        style={styles.flatList}
        data={contacts}
        renderItem={renderContact}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={true}
      />
    </View>
  );
};

export default ContactListScreen;