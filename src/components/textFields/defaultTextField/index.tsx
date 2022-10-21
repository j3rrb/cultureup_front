import { Text, TextInput, TextInputProps, View } from "react-native";
import { COLORS } from "../../../constants";
import textFieldStyles from "./styles";

type Props = {
  error?: string;
};

export default function DefaultTextField({ error, ...props }: TextInputProps & Props) {
  const styles = textFieldStyles();

  return (
    <View>
      <View style={styles.container}>
        <TextInput {...props} selectionColor={COLORS.green} style={styles.input} />
      </View>
      <Text style={styles.errorText}>{error}</Text>
    </View>
  );
}
