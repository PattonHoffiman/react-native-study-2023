import { useState, useCallback } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';

import { Participant } from '../../components/Participant';
import { styles } from './styles';

export default function Home() {
  const [participants, setParticipants] = useState<Array<string>>([
    'Barbara Pinheiro',
    'Patton Hoffiman',
    'Raveninha',
    'Barbara Pinheiro',
    'Patton Hoffiman',
    'Raveninha',
    'Barbara Pinheiro',
    'Patton Hoffiman',
    'Raveninha'
  ]);
  
  const handleParticipantAdd = useCallback(() => {
    if (participants.includes('Patton Hoffiman')) {
      return Alert.alert("Participante Existente", "Já existe um participante na lista com esse nome!");
    }
  }, []);

  const handleParticipantRemove = useCallback((name: string) => {
    Alert.alert("Remover", `Deseja remover o participante ${name}?`, [
      {
        text: 'Não',
        style: 'cancel',
      },
      {
        text: 'Sim',
        onPress: () => Alert.alert('Participante Removido!'),
      },
    ]);
  }, []);

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

        <TouchableOpacity style={styles.button} onPress={() => handleParticipantAdd()}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <Participant
            key={index}
            name={item}
            remove={handleParticipantRemove}
          />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.emptyListText}>Não existem participantes!</Text>
        )}
      />
    </View>
  )
};