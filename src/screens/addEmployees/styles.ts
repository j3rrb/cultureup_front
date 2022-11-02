import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';
import { height100, width100 } from '../../utils/dimensions';

export default function addEmployeesStyles() {
  return StyleSheet.create({
    container: {
      height: height100,
    },
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
      top: 30,
      padding: 10,
    },
    headerButtonText: {
      fontSize: 18,
    },
    buttonContainer: {
      width: width100 * 0.8,
      alignSelf: 'center',
    },
    inputContainer: {
      width: width100 * 0.9,
      alignSelf: 'center',
    },
    listContainer: {
      width: width100 * 0.95,
      marginBottom: 20,
      alignSelf: 'center',
    },
    listItem: {
      paddingVertical: 15,
      paddingLeft: 10,
      borderBottomColor: COLORS.grey,
      borderBottomWidth: 1,
      marginBottom: 5,
    },
    chipsContainer: {
      width: width100 * 0.9,
      alignSelf: 'center',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
  });
}
