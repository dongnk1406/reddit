import React, {useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {HeaderNavigation} from '../HeaderNavigation/HeaderNavigation';

import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export const Header = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <View style={styles.headerView}>
      <View style={styles.headerTop}>
        <FontAwesome name="bars" style={styles.barIcon}></FontAwesome>
        <View style={styles.headerSearch}>
          <AntDesign style={styles.searchIcon} name="search1"></AntDesign>
          <TextInput placeholder="Search"></TextInput>
        </View>

        <View>
          <Image
            style={styles.avatar}
            source={{
              uri: 'https://preview.redd.it/rrz3hmsxcll71.png?width=640&crop=smart&auto=webp&s=87cc5ed38d8f088ef9fffef7a4c5756b64309d6a',
            }}
          />
        </View>
      </View>

      <HeaderNavigation />
    </View>
  );
};

const styles = StyleSheet.create({
  headerView: {
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  headerTop: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },

  barIcon: {
    fontSize: 20,
  },

  headerSearch: {
    backgroundColor: '#f6f7f8',
    height: 30,
    width: '80%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    borderRadius: 6,
  },

  searchIcon: {
    paddingLeft: 4,
    paddingRight: 8,
  },

  avatar: {
    width: 28,
    height: 28,
    backgroundColor: '#000',
    borderRadius: 14,
  },
});
