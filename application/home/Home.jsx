import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../header/Header';

function Home() {
  const navigation = useNavigation();

  return (
    <View>
       <Header />
      <Text>pantalla principal</Text>
      <Button
        title="refrescar"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

export default Home;