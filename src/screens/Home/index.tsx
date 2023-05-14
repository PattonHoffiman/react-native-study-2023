import { View, Text, StyleSheet } from 'react-native';
import styles from './styles';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Hello There!
      </Text>
    </View>
  )
};