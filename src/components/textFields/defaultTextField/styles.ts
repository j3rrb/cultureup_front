import { StyleSheet } from "react-native";

export default function textFieldStyles() {
  return StyleSheet.create({
    container: {
      borderStyle: 'solid',
      borderColor: 'black',
      borderRadius: 10,
      borderWidth: 1
    },
    input: {
      padding: 10,
      fontSize: 16
    },
    errorText: {
      color: 'red',
      paddingTop: 2,
      paddingBottom: 10,
    }
  });
}
