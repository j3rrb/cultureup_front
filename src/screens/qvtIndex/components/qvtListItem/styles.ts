import { StyleSheet } from 'react-native';
import { width100 } from '../../../../utils/dimensions';

type Props = {
  color: string;
};

export default function qvtListItemStyles({ color }: Props) {
  return StyleSheet.create({
    mainContainer: {
      width: width100 * 0.95,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20,
    },
    container: {
      width: 180,
      height: 30,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    colorContainer: {
      width: 25,
    },
    color: {
      borderRadius: 10,
      width: 20,
      height: 20,
      backgroundColor: color,
    },
    mainText: {
      fontSize: 18,
    },
    timeText: {
      fontSize: 16,
    },
  });
}
