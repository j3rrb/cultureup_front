import { Text, View } from 'react-native';

import qvtListItemStyles from './styles';

type Props = {
  text: string;
  color: string;
  time: string;
};

export default function QVTListItem({ text, color, time }: Props) {
  const styles = qvtListItemStyles({ color });

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.colorContainer}>
          <View style={styles.color}></View>
        </View>
        <Text style={styles.mainText}>{text}</Text>
      </View>
      <View>
        <Text style={styles.timeText}>{time}</Text>
      </View>
    </View>
  );
}
