import { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { ChipButton, ConfirmationButton } from '../../components';
import { SearchableField } from '../../components/textFields';
import { COLORS } from '../../constants';
import addEmployeesStyles from './styles';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../..';

type Props = NativeStackScreenProps<RootStackParamList, 'AddEmployees'>;

export default function AddEmployeesScreen({ navigation }: Props) {
  const styles = addEmployeesStyles();
  const [selectedEmployees, setSelectedEmployees] = useState<number[]>([]);

  const removeSelected = (id: number) => {
    const array = [...selectedEmployees];
    const index = array.indexOf(id);

    if (index !== -1) {
      array.splice(index, 1);
      setSelectedEmployees(array);
    }
  };

  return (
    <View style={styles.container}>
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
        <Text style={styles.headerText}>Adicionar colaboradores</Text>
      </View>
      <View style={styles.inputContainer}>
        <SearchableField
          autoCapitalize="none"
          placeholder="E-mail"
          onTextChanged={(text) => {
            console.log(text);
          }}
        />
      </View>
      <View style={styles.chipsContainer}>
        {selectedEmployees.map((x) => (
          <ChipButton
            key={x}
            id={String(x)}
            onDelete={(id) => {
              removeSelected(+id);
            }}
            color={COLORS.lightGray}
            text={`Nome ${x}`}
          />
        ))}
      </View>
      <ScrollView style={styles.listContainer}>
        {Array.from({ length: 50 }).map((_, x) => (
          <TouchableOpacity
            key={x}
            onPress={() => {
              if (selectedEmployees.includes(x)) {
                removeSelected(x);
              } else {
                setSelectedEmployees((prev) => [...prev, x]);
              }
            }}
            style={{
              ...styles.listItem,
              ...(selectedEmployees.includes(x) && {
                backgroundColor: COLORS.lightGray,
                borderRadius: 10,
              }),
            }}>
            <Text>{x}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={styles.buttonContainer}>
        <ConfirmationButton
          disabled={!selectedEmployees.length}
          onPress={() => {
            console.log(selectedEmployees);
          }}
          color={COLORS.green}
          text={`Enviar convite${selectedEmployees.length > 1 ? 's' : ''}`}
        />
      </View>
    </View>
  );
}
