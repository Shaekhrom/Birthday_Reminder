import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View>
      <Text>pantalla de perfil</Text>
      <Button
        title="Ir a Acerca de"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

export default HomeScreen;