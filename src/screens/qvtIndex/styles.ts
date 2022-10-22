import { StyleSheet } from 'react-native';

export default function qvtIndexStyles() {
  return StyleSheet.create({
    header: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 120,
    },
    headerButton: {
      position: 'absolute',
      left: 10,
      padding: 10,
    },
    headerButtonText: {
      fontSize: 18,
    },
    headerText: {
      fontSize: 25,
      fontWeight: 'bold',
    },
    circularProgress: {
      alignSelf: 'center',
      marginBottom: 50,
    },
  });
}
