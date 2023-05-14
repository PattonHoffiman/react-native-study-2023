import { View, Text, TextInput } from 'react-native';
import styles from './styles';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do Evento
      </Text>

      <Text style={styles.eventDate}>
        Domingo, 14 de Maio de 2023.
      </Text>

      <TextInput
        style={styles.input}
        placeholderTextColor="#6b6b6b"
        placeholder='Nome do participante'
      />
    </View>
  )
};