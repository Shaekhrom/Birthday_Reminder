import React from 'react';
import { View, Text, StyleSheet, useState, TouchableOpacity  } from 'react-native';
import styles from './Menu.style';
import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

const Menu = () => {
  
  const navigation = useNavigation();

  return (
    <View style={styles.menuContainer}> 
      {/* button to go to the contact list screen  */ }
      <TouchableOpacity onPress={() => navigation.navigate('Contacts')}>
        <View style={styles.miniContainers}>
          <Text> Contact List </Text>
        </View>
      </TouchableOpacity>
        
      {/* button to go to the event manager screen  */ }  
      <TouchableOpacity onPress={() => navigation.navigate('Events')}>
        <View style={styles.miniContainers}>
          <Text> Manage events</Text>
        </View>
      </TouchableOpacity>  

      {/* button to go to the settings screen  */ }    
      <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
        <View style={styles.miniContainers}>
          <Text> Settings </Text>
        </View>
      </TouchableOpacity>  
      
    </View>
  );
};

export default Menu;