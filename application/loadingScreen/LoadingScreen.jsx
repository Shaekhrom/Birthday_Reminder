import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import styles from './loadingScreenStyle';

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#FEC8D8" style={styles.indicator}/>
    </View>
  );
};

export default LoadingScreen;
