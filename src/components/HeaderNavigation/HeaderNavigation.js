import React, {useState} from 'react';

import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  SectionList,
  TouchableOpacity,
} from 'react-native';

const Item = ({item, onPress, textColor, borderColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, borderColor]}>
    <Text style={{color: textColor}}>{item.title}</Text>
  </TouchableOpacity>
);

const items = [
  {id: 1, title: 'News'},
  {id: 2, title: 'Home'},
  {id: 3, title: 'Popular'},
];

export const HeaderNavigation = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({item}) => {
    const textColor = item.id === selectedId ? '#000' : '#ccc';
    const borderColor = item.id === selectedId ? 'transparent' : '#000';

    return (
      <Item
        key={item.id}
        item={item}
        onPress={() => {
          setSelectedId(item.id);
          console.log(borderColor);
        }}
        textColor={textColor}
        borderColor={borderColor}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        horizontal
        data={items}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
  },

  item: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginHorizontal: 32,
    borderBottomWidth: 1,
    borderColor: 'transparent',
  },
});
