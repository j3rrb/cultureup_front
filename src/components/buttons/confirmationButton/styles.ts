import { StyleSheet } from 'react-native';

type Props = {
  color?: string;
  width?: number;
  borderColor?: string;
};

export default function confimationButtonStyles({ color, width, borderColor }: Props) {
  return StyleSheet.create({
    button: {
      borderRadius: 100,
      ...(borderColor && {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor,
      }),
      backgroundColor: color || 'transparent',
      padding: 15,
      width,
    },
    text: {
      textAlign: 'center',
      fontSize: 18,
      fontWeight: 'bold',
    },
  });
}
