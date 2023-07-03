import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importa tus componentes de pantalla
import HeaderMain from './application/header/Header';
import ProfileScreen from './application/profile/Profile';
import HomeScreen from './application/home/Home';
import ContactScreen from './application/agenda/ContactList';
import EventScreen from './application/eventManager/EventManager';
import SettingsScreen from './application/settingsApp/Settings';
import EditContact from './application/contact/Contact';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/*pantalla home*/}
        <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }} // Oculta el encabezado en la pantalla About
          />

        {/*header*/}
        <Stack.Screen
            name="Header"
            component={HeaderMain}
            options={{ headerShown: false }} // Oculta el encabezado en la pantalla Home
          />

          {/*pantalla perfil*/}
          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{ headerShown: false }} // Oculta el encabezado en la pantalla About
          />

          {/*contacts screen*/}
          <Stack.Screen
            name="Contacts"
            component={ContactScreen}
            options={{ headerShown: false }} // Oculta el encabezado en la pantalla About
          />

          {/*events screen*/}
          <Stack.Screen
            name="Events"
            component={EventScreen}
            options={{ headerShown: false }} // Oculta el encabezado en la pantalla About
          />

          {/*settings screen*/}
          <Stack.Screen
            name="Settings"
            component={SettingsScreen}
            options={{ headerShown: false }} // Oculta el encabezado en la pantalla About
          />

          {/*contact edit screen*/}
          <Stack.Screen
            name="Contact"
            component={EditContact}
            options={{ headerShown: false }} // Oculta el encabezado en la pantalla About
          />

          
          {/* Agrega más pantallas y rutas según sea necesario */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
