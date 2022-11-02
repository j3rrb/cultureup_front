import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { DefaultTextField } from '../../components';
import { ListItem } from './components';
import employeesListStyles from './styles';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../..';

type Props = NativeStackScreenProps<RootStackParamList, 'EmployeesList'>;

const employees = Array.from({ length: 100 }).map((_, i) => `Test - ${i}`);

export default function EmployeesListScreen({ navigation }: Props) {
  const styles = employeesListStyles();

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
        <Text style={styles.headerText}>Colaboradores</Text>
      </View>
      <View style={styles.searchContainer}>
        <DefaultTextField placeholder="Buscar colaborador" />
      </View>
      <ScrollView style={styles.itemsContainer}>
        {employees.map((employee) => (
          <ListItem text={employee} />
        ))}
      </ScrollView>
    </View>
  );
}
