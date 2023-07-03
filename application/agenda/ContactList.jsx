import { View, Text , TextInput, Button, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../header/Header';
import styles from './ContactList.style';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

function HomeScreen() {
  const navigation = useNavigation();

  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        // Obtén la lista de contactos almacenada en AsyncStorage
        const storedContacts = await AsyncStorage.getItem('contacts');
        if (storedContacts) {
          // Parsea la lista de contactos y actualiza el estado
          setContacts(JSON.parse(storedContacts));
        }
      } catch (error) {
        console.log('Error al obtener los contactos:', error);
      }
    };

    // Llama a la función para obtener los contactos cuando el componente se monte
    fetchContacts();
  }, []);

  return (
    <View>
       <Header />
        <View style={styles.container}>
          <Button 
            title="Add Contact"
            onPress={() => navigation.navigate('Contact')}
          />
          <Text style={styles.contactListLetter}>Contact List</Text>

          {contacts.length > 0 ? (
        <FlatList
            data={contacts}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.contactItem}>
                <Text style={styles.contactName}>{item.name}</Text>
                <Text style={styles.contactDetails}>{item.photo}</Text>
                <Text style={styles.contactDetails}>{item.birthday}</Text>
                <Text style={styles.contactDetails}>{item.interests}</Text>
              </View>
            )}
        />
          ) : (
            <Text>Contact list is empty, try to add someone to start!</Text>
          )}

          <Button
            style={styles.backToHome}
            title="Back to Home"
            onPress={() => navigation.navigate('Home')}
          />
        </View>
        
    </View>
  );
}

export default HomeScreen;