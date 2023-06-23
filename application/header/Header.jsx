import * as React from 'react';
import { View, Text, Button, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons'; 
import styles from './Header.style';
import { AntDesign } from '@expo/vector-icons'; 
import Menu from '../menu/Menu';

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Navigation  */ }
      <TouchableOpacity onPress={toggleMenu}>
        <AntDesign style={styles.headerIcons} name="bars" size={40} color="black" />
      </TouchableOpacity>
      {isMenuOpen && <Menu />}

      {/* Logo that reloads the page  */ }
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Image style={styles.logoImage} source={require('../../assets/images/logoWithoutBackground.png')} />
      </TouchableOpacity>

      {/* Profile picture (tap to go to edit profile page) */ }
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <FontAwesome style={styles.headerIcons} name="user-circle" size={40} color="black" />
      </TouchableOpacity>

      {/* copyright  */ }
      <View style={styles.copyright}>
        <Text>Created by @Shaekhrom (Alejandro Barbacil)</Text>
      </View>

    </View>
  );
}

export default Header;