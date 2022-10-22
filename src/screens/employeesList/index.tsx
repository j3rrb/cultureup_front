import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { DefaultTextField } from "../../components";
import { ListItem } from "./components";
import employeesListStyles from "./styles";

const employees = Array.from({ length: 100 }).map((_, i) => `Test - ${i}`);

export default function EmployeesList() {
  const styles = employeesListStyles();

  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerButton}>
          <Text style={styles.headerButtonText}>Voltar</Text>
        </TouchableOpacity>
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
