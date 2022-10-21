import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import confimationButtonStyles from "./styles";

type Props = {
  text: string;
  color?: string;
};

export default function ConfirmationButton({
  text,
  color,
  ...props
}: TouchableOpacityProps & Props) {
  const styles = confimationButtonStyles({ color });

  return (
    <TouchableOpacity {...props} style={styles.button}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}
