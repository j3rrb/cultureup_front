import { Text, View } from "react-native";
import listItemStyles from "./styles";

type Props = {
  text: string;
};

export default function ListItem({ text }: Props) {
  const styles = listItemStyles();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}
