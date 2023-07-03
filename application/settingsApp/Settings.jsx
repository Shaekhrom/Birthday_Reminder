import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../header/Header';

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View>
       <Header />
      <Text>pantalla de settings</Text>
      <Button
        title="Ir a Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

export default HomeScreen;