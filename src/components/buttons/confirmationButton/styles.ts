import { StyleSheet } from 'react-native';

import { COLORS } from '../../../constants';

type Props = {
  color?: string;
  width?: number;
  borderColor?: string;
  disabled?: boolean;
};

export default function confimationButtonStyles({ color, width, borderColor, disabled }: Props) {
  return StyleSheet.create({
    button: {
      borderRadius: 100,
      ...(borderColor && {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor,
      }),
      backgroundColor: !disabled && color ? color : disabled ? COLORS.lightGray : 'transparent',
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
