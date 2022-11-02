import { StyleSheet } from 'react-native';

import { height100, width100 } from '../../utils/dimensions';

export default function signUpStyles() {
  return StyleSheet.create({
    mainContainer: {
      width: width100,
    },
    header: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 150,
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
    inputs: {
      height: height100 * 0.5,
      marginBottom: 80,
      width: width100 * 0.85,
      display: 'flex',
      flexDirection: 'column',
      alignSelf: 'center',
      justifyContent: 'space-between',
    },
    buttons: {
      height: 180,
      width: width100 * 0.85,
      display: 'flex',
      flexDirection: 'column',
      alignSelf: 'center',
      justifyContent: 'space-between',
    },
    emptyListMessage: {
      textAlign: 'center',
      padding: 5,
    },
    errorMessage: {
      color: 'red',
      paddingTop: 2,
      paddingBottom: 10,
    },
  });
}
