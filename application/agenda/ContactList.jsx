import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, TextInput, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../header/Header';
import { useNavigation } from '@react-navigation/native';
import styles from './ContactList.style';


const ContactListScreen = ({ navigation }) => {
  const [contacts, setContacts] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [filteredContacts, setFilteredContacts] = useState([]);

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
      Alert.alert('Error loading the contact list');
    }
  };

  const handleEditContact = (contact) => {
    navigation.navigate('EditContact', { contact });
  };

  const renderContact = ({ item }) => (
    <View style={styles.peronalDataBox}>
      <TouchableOpacity onPress={() => handleEditContact(item)}>
        <View style={styles.generalInfo}>
          <View style={styles.dataAligner}>
            <Text style={styles.textInfo}>Name:</Text>
            <Text style={styles.textInfo}>{item.name}</Text>
          </View>
          <View style={styles.dataAligner}>
            <Text style={styles.textInfo}>Birthday date:</Text>
            <Text style={styles.textInfo}>{item.birthday}</Text>
          </View>
          <View>
            <Text style={styles.textInfo}>Personal interests:</Text>
            <Text >{item.interests}</Text>
          </View>
        </View>
      </TouchableOpacity>

      <View style={{ height: 20 }} />

      <Button title="Delete contact" onPress={() => handleDeleteContact(item)} />
    </View>
  );

  const handleDeleteContact = async (contact) => {
    try {
      let storedContacts = await AsyncStorage.getItem('contacts');
      let contacts = [];
      if (storedContacts) {
        contacts = JSON.parse(storedContacts);
        contacts = contacts.filter((c) => c.id !== contact.id);
        await AsyncStorage.setItem('contacts', JSON.stringify(contacts));
        Alert.alert('Contact deleted succesfully');
        loadData();
      }
    } catch (error) {
      console.log(error);
      Alert.alert('Error deleting contact, try again!');
    }
  };

  const handleSearch = (text) => {
    setSearchText(text);
    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredContacts(filteredContacts);
  };

  useEffect(() => {
    setFilteredContacts(contacts);
  }, [contacts]);

  return (
    <View style={styles.container}>
      <Header />

  

      <View>
        

        <View style={{ height: 20 }} />


        {/* Contact list with flatlist view */}
        <View>
          {/* Contact list text */}
          <View style={styles.itemAligner}>
            <View style={styles.contactListLetterBox}>
              <Text style={{fontSize: 25}}>CONTACT LIST</Text>
            </View>

            <View style={{ height: 15 }} />

          </View>
            <View style={styles.searchPlusAddContainer}>
                {/* Search bar */}
                <TextInput
                  style={styles.searchBar}
                  placeholder="Search by name"
                  onChangeText={handleSearch}
                  value={searchText}
                />

                {/* Add contact button */}
                <View style={styles.addContactContainer}>
                  <Button
                    title="+ Add contact"
                    onPress={() => navigation.navigate('CreateContact')}
                  />
                </View>
            </View>

          <View style={{ height: 15 }} />

          {/* Flatlist */}
          <FlatList
            style={styles.flatList}
            data={filteredContacts}
            renderItem={renderContact}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={true}
            ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
            ListFooterComponent={<View style={{ marginBottom: 50 }} />}
          />
        </View>
      </View>
    </View>
  );
};

export default ContactListScreen;
