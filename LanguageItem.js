import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LanguageItem = ({ lang }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.text}>{lang}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 15,
    marginVertical: 8,
    backgroundColor: '#f9c2ff',
  },
  text: {
    fontSize: 18,
  },
});

export default LanguageItem;