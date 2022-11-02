import { StyleSheet } from 'react-native';

import { width100 } from '../../utils/dimensions';

export default function createCompanyStyles() {
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
    headerTitle: {
      fontSize: 30,
      fontWeight: '700',
    },
    formContainer: {
      width: width100 * 0.95,
      alignSelf: 'center',
    },
    inputs: {
      marginBottom: 30,
    },
  });
}
