import { StyleSheet } from 'react-native';

import { COLORS } from '../../../../constants';

export default function listItemStyles() {
  return StyleSheet.create({
    container: {
      padding: 20,
      borderBottomColor: COLORS.grey,
      borderBottomWidth: 1,
    },
    text: {
      fontSize: 16,
    },
  });
}
