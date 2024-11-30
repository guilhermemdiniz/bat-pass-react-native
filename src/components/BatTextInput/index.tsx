
import React from 'react'
import { TextInput } from 'react-native'
import { styles } from './style'

interface BatTextInputProps {
  pass: string
}

export default function BatTextInput({ pass }: BatTextInputProps) {
  return (
    <TextInput
      style={styles.input}
      placeholder='pass'
      value={pass}
    />
  )
}

