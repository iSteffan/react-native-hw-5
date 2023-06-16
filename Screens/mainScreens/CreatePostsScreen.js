import React, { useState } from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function CreatePostsScreen() {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [isNameFocus, setIsNameFocus] = useState(false);
  const [isLocationFocus, setIsLocationFocus] = useState(false);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={keyboardHide}>
        <View>
          <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            {!isShowKeyboard && (
              <View>
                <View style={styles.imageBackground}>
                  <View style={styles.photoIconWrap}>
                    <MaterialIcons name="photo-camera" size={24} color="#BDBDBD" />
                  </View>
                </View>
                <Text style={styles.text}>Завантажити фото</Text>
              </View>
            )}

            <TextInput
              value={name}
              onChangeText={value => setName(value)}
              placeholder="Назва..."
              placeholderTextColor={'#BDBDBD'}
              onFocus={() => {
                setIsShowKeyboard(true);
                setIsNameFocus(true);
              }}
              onBlur={() => setIsNameFocus(false)}
              style={{
                ...styles.input,
                borderBottomColor: isNameFocus ? '#ff6c00' : '#e8e8e8',
                marginTop: 30,
              }}
            />
            <View>
              <Ionicons
                name="ios-location-outline"
                size={24}
                color="#BDBDBD"
                style={{
                  ...styles.locationIcon,
                  color: isLocationFocus ? '#ff6c00' : '#BDBDBD',
                }}
              />
              <TextInput
                value={location}
                onChangeText={value => setLocation(value)}
                placeholder="Місцевість..."
                placeholderTextColor={'#BDBDBD'}
                onFocus={() => {
                  setIsShowKeyboard(true);
                  setIsLocationFocus(true);
                }}
                onBlur={() => setIsLocationFocus(false)}
                style={{
                  ...styles.input,
                  borderBottomColor: isLocationFocus ? '#ff6c00' : '#e8e8e8',
                  marginTop: 30,
                  paddingLeft: 25,
                }}
              />
            </View>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Опублікувати</Text>
            </Pressable>
            <View style={styles.trashIconWrap}>
              <Pressable style={styles.trashButton}>
                <FontAwesome5 name="trash-alt" size={24} color="#DADADA" />
              </Pressable>
            </View>
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 32,

    backgroundColor: '#fff',
  },
  imageBackground: {
    justifyContent: 'center',
    alignItems: 'center',

    width: '100%',
    height: 240,
    backgroundColor: '#F6F6F6',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 8,
  },
  photoIconWrap: {
    justifyContent: 'center',
    alignItems: 'center',

    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 50,
  },
  text: {
    marginTop: 8,

    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    color: '#BDBDBD',
    lineHeight: 19,
  },
  input: {
    width: '100%',
    height: 35,
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
  },
  locationIcon: {
    position: 'absolute',
    bottom: 7,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,

    width: '100%',
    height: 50,
    backgroundColor: '#F6F6F6',
    borderRadius: 100,
  },
  buttonText: {
    fontFamily: 'Roboto-Regular',
    color: '#BDBDBD',
    fontSize: 16,
  },
  trashButton: {
    justifyContent: 'center',
    alignItems: 'center',

    width: 70,
    height: 40,
    backgroundColor: '#F6F6F6',
    borderRadius: 20,
    textAlign: 'center',
  },
  trashIconWrap: {
    alignItems: 'center',
    marginTop: 120,
  },
});
