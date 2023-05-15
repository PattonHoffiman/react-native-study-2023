import { useState, useEffect, useCallback } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';

import { Participant } from '../../components/Participant';
import { styles } from './styles';

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const [participants, setParticipants] = useState<Array<string>>([]);
  
  const handleParticipantAdd = useCallback((name: string) => {
    if (name === '') {
      return Alert.alert('Campo Vazio', 'Você precisa inserir um participante!');
    }

    if (participants.includes(name)) {
      setInputValue('');
      return Alert.alert("Participante Existente", "Já existe um participante na lista com esse nome!");
    }

    setParticipants(prev => [...prev, name]);
    setInputValue('');
  }, [participants]);

  const handleParticipantRemove = useCallback((name: string) => {
    Alert.alert("Remover", `Deseja remover o participante ${name}?`, [
      {
        text: 'Não',
        style: 'cancel',
      },
      {
        text: 'Sim',
        onPress: () => removeParticipant(name),
      },
    ]);
  }, [participants]);

  const removeParticipant = useCallback((name: string) => {
    const filteredParticipants = participants.filter((participant) => participant !== name);
    setParticipants(filteredParticipants);
  }, [participants]);

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
          value={inputValue}
          style={styles.input}
          placeholderTextColor="#6b6b6b"
          placeholder='Nome do participante'
          onChangeText={(text) => setInputValue(text)}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleParticipantAdd(inputValue)}
        >
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