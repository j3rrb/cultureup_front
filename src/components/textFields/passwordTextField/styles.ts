import { StyleSheet } from "react-native";

export default function passwordTextFieldStyles() {
  return StyleSheet.create({
    container: {
      borderStyle: "solid",
      borderColor: "black",
      borderRadius: 10,
      borderWidth: 1,
    },
    input: {
      padding: 10,
      fontSize: 16,
    },
    errorText: {
      color: "red",
      paddingTop: 2,
      paddingBottom: 10,
    },
    iconButton: {
      position: "absolute",
      right: 0,
      height: 30,
      width: 50,
      margin: 10,
      fontSize: 15,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  });
}
