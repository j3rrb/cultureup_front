import { StyleSheet } from 'react-native';

import { width100 } from '../../utils/dimensions';

export default function createCompanyStyles() {
  return StyleSheet.create({
    header: {
      height: 150,
      display: 'flex',
      justifyContent: 'center',
    },
    headerTitle: {
      textAlign: 'center',
      fontSize: 30,
      fontWeight: 'bold',
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
