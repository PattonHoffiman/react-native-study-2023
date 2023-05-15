import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#131016',
  },

  eventDate: {
    fontSize: 16,
    color: '#6b6b6b',
  },
  eventName: {
    fontSize: 24,
    marginTop: 48,
    color: '#fdfcfe',
    fontWeight: 'bold',
  },
  emptyListText: {
    fontSize: 14,
    color: '#fdfcfe',
    textAlign: 'center',
  },

  input: {
    flex: 1,
    height: 56,
    padding: 16,
    fontSize: 16,
    borderRadius: 5,
    marginRight: 12,

    color: '#fdfcfe',
    backgroundColor: '#1f1e25',
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#31cf67',

    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 24,
    color: '#fdfcfe',
  },

  form: {
    width: '100%',
    flexDirection: 'row',

    marginTop: 36,
    marginBottom: 42,
  },
});
