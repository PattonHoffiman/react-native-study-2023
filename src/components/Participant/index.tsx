import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './styles';

type Props = {
  name: string;

  remove: (param: string) => void;
}

export const Participant: React.FC<Props> = ({ name, remove }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        {name}
      </Text>

      <TouchableOpacity style={styles.button} onPress={() => remove(name)}>
          <Text style={styles.buttonText}>
            -
          </Text>
        </TouchableOpacity>
    </View>
  );
};
