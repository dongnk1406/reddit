import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from "react-native-vector-icons/AntDesign";

import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  StyleSheet,
} from 'react-native';


export const UserInfo = () => {
  const [text, setText] = useState("");

  const handelTextInput = value => {
    setText(value);
  };

  return (
    <ScrollView>
      <View>
        <LinearGradient style={styles.headerView} colors={['#F3904F', '#000000']}>
          <Image
            style={styles.avatar}
            source={{
              uri: 'https://preview.redd.it/rrz3hmsxcll71.png?width=640&crop=smart&auto=webp&s=87cc5ed38d8f088ef9fffef7a4c5756b64309d6a',
            }}
          />
          <Text style={styles.textName}>Dong NK</Text>
          <Text style={styles.text14}>22 years old</Text>
          <Text style={styles.text16}>I'm a front end developer</Text>
        </LinearGradient>
      </View>

      <AntDesign name='stepforward' size={50} color={"red"}></AntDesign>
      

      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        placeholder="Type here to translate!"
        defaultValue={text}
        onChangeText={handelTextInput}
      />

      <Text style={{padding: 10, fontSize: 42}}>
        {text
          .split(' ')
          .map(word => word && '🍕')
          .join(' ')}
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  headerView: {
    backgroundColor: '#FF9051',
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },

  avatar: {
    width: 85,
    height: 130,
  },

  textName: {
    fontSize: 20,
    fontWeight: "bold",
    color: '#fff'
  },

  text16: {
    color: '#fff',
    fontWeight: "bold",
    fontSize: 16,
  },

  text14: {
    paddingVertical: 6,
    fontSize: 14,
    color: '#fff'
  },

  editInfo: {
    position: 'absolute',
    top: 4,
    right: 4,
  }
});
