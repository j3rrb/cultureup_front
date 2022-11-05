import { StyleSheet } from 'react-native';

import { width100 } from '../../utils/dimensions';

export default function rateStyles() {
  return StyleSheet.create({
    header: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 120,
    },
    headerTitle: {
      fontSize: 30,
      fontWeight: '700',
    },
    headerButton: {
      position: 'absolute',
      left: 10,
      padding: 10,
    },
    headerButtonText: {
      fontSize: 18,
    },
    textLabel: {
      fontSize: 16,
    },
    formContainer: {
      width: width100 * 0.95,
      alignSelf: 'center',
    },
    buttons: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginVertical: 20,
    },
    errorText: {
      fontSize: 15,
      color: 'red',
    },
  });
}
