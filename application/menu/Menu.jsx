import React from 'react';
import { View, Text, StyleSheet, useState  } from 'react-native';
import styles from './Menu.style';
import { AntDesign } from '@expo/vector-icons'; 

const Menu = () => {
 

  return (
    <View style={styles.menuContainer}> 
      <Text>Opción 1</Text>
      <Text>Opción 2</Text>
      <Text>Opción 3</Text>
      {/* Agrega más opciones de menú según sea necesario */}
    </View>
  );
};

export default Menu;