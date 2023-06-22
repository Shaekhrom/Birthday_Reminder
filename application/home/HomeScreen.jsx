import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons'; 
import styles from './HomeScreen.style'
import { TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Navigation */ }
      <View>
        <AntDesign name="bars" size={40} color="black" />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <FontAwesome name="user-circle" size={40} color="black" />
      </TouchableOpacity>

    </View>
  );
}

export default HomeScreen;