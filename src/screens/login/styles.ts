import { StyleSheet } from "react-native";
import { width100 } from "../../utils/dimensions";

export default function loginStyles() {
  return StyleSheet.create({
    mainContainer: {
      width: width100,
    },
    titleContainer: {
      display: "flex",
      height: 200,
      width: width100,
      justifyContent: "center",
      alignItems: "center",
    },
    title: {
      fontSize: 50,
      fontWeight: "600",
    },
    inputs: {
      height: 115,
      marginBottom: 80,
      width: width100 * 0.85,
      display: "flex",
      flexDirection: "column",
      alignSelf: "center",
      justifyContent: "space-between",
    },
    buttons: {
      height: 180,
      width: width100 * 0.85,
      display: "flex",
      flexDirection: "column",
      alignSelf: "center",
      justifyContent: "space-between",
    },
  });
}
