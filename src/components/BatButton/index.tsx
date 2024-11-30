
import React, { useState } from 'react';
import { Pressable, View, Text } from 'react-native';
import BatTextInput from '../BatTextInput';

import * as Clipboard from 'expo-clipboard';

import { styles } from './styles';
import generatePass from '../../services/passwordService';

export function BatButton() {
  const [pass, setPass] = useState('');

  function handleGenerate() {
    setPass(generatePass());
  }

  function handleCopy() {
    Clipboard.setStringAsync(pass);
  }

  return (
    <>
      <BatTextInput pass={pass} />
      <Pressable
        style={styles.button}
        onPress={handleGenerate}
      >
        <Text style={styles.text}>✨ GENERATE</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={handleCopy}
      >
        <Text style={styles.text}>⚡ COPY</Text>
      </Pressable>
    </>
  );
}
