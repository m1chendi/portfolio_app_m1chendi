import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import LanguageItem from './LanguageItem'; 

const langs = [
  { id: '1', lang: 'JavaScript', experience: 3, image: 'https://avatars.dzeninfra.ru/get-zen_doc/53963/pub_651011ddc419e8692e91c5dc_65101281d67f4c757ed51043/scale_1200' }, 
  { id: '2', lang: 'Python', experience: 2, image: 'https://o.quizlet.com/8TbHnZz4geK2cG2KORCz0A_b.png' }, 
];

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={langs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <LanguageItem language={item.lang} experience={item.experience} image={item.image} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#f5f5f5',
  },
});
