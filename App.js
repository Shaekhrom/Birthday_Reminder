import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importa tus componentes de pantalla
import HeaderMain from './application/header/Header';
import ProfileScreen from './application/profile/Profile';
import HomeScreen from './application/home/Home';
import ContactList from './application/agenda/ContactList';
import EventScreen from './application/eventManager/EventManager';
import SettingsScreen from './application/settingsApp/Settings';
import NewContact from './application/contact/Contact';
import EditContactScreen from './application/editContact/EditContactScreen';
import LoadingScreen from './application/loadingScreen/LoadingScreen';

const Stack = createStackNavigator();



function App() {

  
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      // Simula una carga inicial
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }, []);
  
    if (isLoading) {
      return <LoadingScreen />;
    }


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
            name="ContactList"
            component={ContactList}
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

          {/*create contact screen*/}
          <Stack.Screen
            name="CreateContact"
            component={NewContact}
            options={{ headerShown: false }} // Oculta el encabezado en la pantalla About
          />

          {/*contact edit screen*/}
          <Stack.Screen
            name="EditContact"
            component={EditContactScreen}
            options={{ headerShown: false }} // Oculta el encabezado en la pantalla About
          />

          {/*loading screen*/}
          <Stack.Screen
            name="Loading"
            component={EditContactScreen}
            options={{ headerShown: false }} // Oculta el encabezado en la pantalla About
          />

          
          {/* Agrega más pantallas y rutas según sea necesario */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
