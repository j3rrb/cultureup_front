import { StyleSheet } from "react-native";
import { height100, width100 } from "../../utils/dimensions";

export default function signUpStyles() {
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
      fontSize: 40,
      fontWeight: "600",
    },
    inputs: {
      height: height100 * 0.5,
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
    emptyListMessage: {
      textAlign: "center",
      padding: 5,
    },
    errorMessage: {
      color: "red",
      paddingTop: 2,
      paddingBottom: 10,
    },
  });
}
