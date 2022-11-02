import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';

import { QVTListItem } from './components';
import qvtIndexStyles from './styles';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../..';

type Props = NativeStackScreenProps<RootStackParamList, 'QVTIndex'>;

export default function QVTIndexScreen({ navigation }: Props) {
  const styles = qvtIndexStyles();
  const VALUE = 50;
  const REMAINING = 100 - VALUE;
  const ratings = Array.from({ length: 100 }).map((_, i) => ({
    color: i % 2 === 0 ? 'green' : 'red',
    text: `Avaliação ${i % 2 === 0 ? 'positiva' : 'negativa'}`,
    time: `${String(Math.floor(Math.random() * 90 + 10))}:${String(
      Math.floor(Math.random() * 90 + 10)
    )}`,
  }));

  return (
    <View>
      <View style={styles.header}>
        {navigation.canGoBack() && (
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={styles.headerButton}>
            <Text style={styles.headerButtonText}>Voltar</Text>
          </TouchableOpacity>
        )}
        <Text style={styles.headerText}>Índice de QVT</Text>
      </View>
      <View style={styles.circularProgress}>
        <CircularProgress
          value={VALUE}
          duration={1000}
          progressValueFontSize={30}
          activeStrokeColor="orange"
          title={`${REMAINING} restantes`}
          titleStyle={{
            fontSize: 15,
            color: 'grey',
          }}
          progressValueStyle={{
            color: 'orange',
          }}
          valueSuffixStyle={{
            color: 'black',
            fontSize: 20,
          }}
          clockwise={false}
          valueSuffix={' /100%'}
          radius={100}
          inActiveStrokeWidth={2}
          activeStrokeWidth={3}
        />
      </View>
      <ScrollView>
        {ratings.map((rating) => (
          <QVTListItem {...rating} />
        ))}
      </ScrollView>
    </View>
  );
}
