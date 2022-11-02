import { StyleSheet } from 'react-native';
import { width100 } from '../../utils/dimensions';

export default function forgotPasswordStyles() {
  return StyleSheet.create({
    header: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      height: 100,
      marginBottom: 30,
    },
    headerText: {
      fontSize: 25,
      fontWeight: 'bold',
    },
    headerButton: {
      position: 'absolute',
      left: 10,
      top: 65,
      padding: 10,
    },
    headerButtonText: {
      fontSize: 18,
    },
    descriptionContainer: {
      width: width100 * 0.95,
      alignSelf: 'center',
      marginBottom: 30,
    },
    description: {
      fontSize: 17,
    },
    inputContainer: {
      width: width100 * 0.95,
      alignSelf: 'center',
    },
    buttonContainer: {
      width: width100 * 0.95,
      alignSelf: 'center',
    },
  });
}
