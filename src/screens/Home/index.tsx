import { useState, useCallback } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Home() {
  const handleParticipantAdd = useCallback(() => console.log('Você clicou no botão de adicionar'), []);

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do Evento
      </Text>

      <Text style={styles.eventDate}>
        Domingo, 14 de Maio de 2023.
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholderTextColor="#6b6b6b"
          placeholder='Nome do participante'
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
};