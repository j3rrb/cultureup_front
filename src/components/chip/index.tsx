import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import chipStyles from './styles';

type Props = {
  id?: string;
  color: string;
  text: string;
  onDelete?: (id: string) => void;
};

export default function ChipButton({
  color,
  text,
  id,
  onDelete,
  ...props
}: TouchableOpacityProps & Props) {
  const styles = chipStyles({ color });

  const onRemove = () => {
    if (onDelete && id) {
      onDelete(id);
    }
  };

  return (
    <TouchableOpacity
      {...props}
      style={styles.container}
      onPress={() => {
        onRemove();
      }}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
}
