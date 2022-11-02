import { StyleSheet } from 'react-native';

type Props = {
  color: string;
};

export default function chipStyles({ color }: Props) {
  return StyleSheet.create({
    container: {
      backgroundColor: color,
      borderRadius: 100,
      alignSelf: 'flex-start',
      paddingVertical: 8,
      paddingHorizontal: 10,
      marginRight: 5,
      marginBottom: 5,
    },
  });
}
