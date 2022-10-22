import { StyleSheet } from "react-native";
import { width100 } from "../../utils/dimensions";

export default function employeesListStyles() {
  return StyleSheet.create({
    itemsContainer: {
      width: width100 * 0.95,
      alignSelf: "center",
    },
    searchContainer: {
      width: width100 * 0.95,
      alignSelf: "center",
    },
    header: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: 120,
    },
    headerButton: {
      position: "absolute",
      left: 10,
      padding: 10,
    },
    headerButtonText: {
      fontSize: 18,
    },
    headerText: {
      fontSize: 25,
      fontWeight: "bold",
    },
  });
}
