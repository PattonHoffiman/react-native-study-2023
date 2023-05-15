import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#1f1e25',

    borderRadius: 5,
    marginBottom: 10,

    alignItems: 'center',
    flexDirection: 'row',
  },

  name: {
    flex: 1,
    fontSize: 16,
    marginLeft: 16,
    color: '#fdfcfe',
  },

  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#e23c44',

    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 24,
    color: '#fdfcfe',
  },
});