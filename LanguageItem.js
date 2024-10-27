import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const LanguageItem = ({ language, experience, image }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={{ uri: image }} />
      <View style={styles.textContainer}>
        <Text style={styles.language}>{language}</Text>
        <Text style={styles.experience}>Опыт: {experience} года</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    bottom: 10,
    top: 10,
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fff',
    marginVertical: 4,
    marginHorizontal: 16,
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 4,
  },
  textContainer: {
    flex: 1,
    marginLeft: 4,
  },
  language: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  experience: {
    fontSize: 11,
    color: '#666',
  },
});

export default LanguageItem;