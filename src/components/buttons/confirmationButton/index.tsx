import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import confimationButtonStyles from './styles';

type Props = {
  text: string;
  color?: string;
  borderColor?: string;
  width?: number;
};

export default function ConfirmationButton({
  text,
  color,
  width,
  borderColor,
  ...props
}: TouchableOpacityProps & Props) {
  const styles = confimationButtonStyles({ color, width, borderColor, disabled: props.disabled });

  return (
    <TouchableOpacity {...props} style={styles.button}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}
