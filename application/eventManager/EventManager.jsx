import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, TextInput, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import Header from '../header/Header';
import styles from './EventManager.style';
import { Notifications } from 'expo';




function HomeScreen() {
  const navigation = useNavigation();

  {/*Constants*/}
  const [events, setEvents] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [filteredEvents, setFilteredEvents] = useState([]);

  {/*Functions*/}
  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    navigation.addListener('focus', loadData);
  }, [navigation]);

  const loadData = async () => {
    try {
      const storedEvents = await AsyncStorage.getItem('events');
      if (storedEvents) {
        setEvents(JSON.parse(storedEvents));
      }
    } catch (error) {
      console.log(error);
      Alert.alert('Error loading the events list');
    }
  };

  const handleEditEvent = (event) => {
    navigation.navigate('EditEventScreen', { event });
  };

  const renderEvent = ({ item }) => (
    <View style={styles.peronalDataBox}>
      <TouchableOpacity onPress={() => handleEditEvent(item)}>
        <View style={styles.generalInfo}>
          <View style={styles.dataAligner}>
            <Text style={styles.textInfo}>Name:</Text>
            <Text style={styles.textInfo}>{item.name}</Text>
          </View>
          <View style={styles.dataAligner}>
            <Text style={styles.textInfo}>Event date:</Text>
            <Text style={styles.textInfo}>{item.date}</Text>
          </View>
          <View>
            <Text style={styles.textInfo}>Event description:</Text>
            <Text >{item.desc}</Text>
          </View>
        </View>
      </TouchableOpacity>

      <View style={{ height: 20 }} />

      <Button title="Delete event" onPress={() => handleDeleteEvent(item)} />
    </View>
  );

  const handleDeleteEvent = async (event) => {
    try {
      let storedEvents = await AsyncStorage.getItem('events');
      let events = [];
      if (storedEvents) {
        events = JSON.parse(storedEvents);
        events = events.filter((e) => e.id !== event.id);
        await AsyncStorage.setItem('events', JSON.stringify(events));
        Alert.alert('Event deleted succesfully');
        loadData();
      }
    } catch (error) {
      console.log(error);
      Alert.alert('Error deleting event, try again!');
    }
  };


  const handleSearch = (text) => {
    setSearchText(text);
    const filteredEvents = events.filter((event) =>
      event.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredEvents(filteredEvents);
  };

  useEffect(() => {
    setFilteredEvents(events);
  }, [events]);


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
              <Text style={{fontSize: 25}}>EVENT LIST</Text>
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
                    title="+ Add event"
                    onPress={() => navigation.navigate('newEventScreen')}
                  />
                </View>
            </View>

          <View style={{ height: 15 }} />

          {/* Flatlist */}
          <FlatList
            style={styles.flatList}
            data={filteredEvents}
            renderItem={renderEvent}
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

export default HomeScreen;