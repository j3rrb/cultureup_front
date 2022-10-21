import { StyleSheet } from "react-native";

type Props = {
  color?: string;
};

export default function confimationButtonStyles({ color }: Props) {
  return StyleSheet.create({
    button: {
      borderRadius: 100,
      backgroundColor: color || "transparent",
      padding: 15,
    },
    text: {
      textAlign: "center",
      fontSize: 18,
      fontWeight: 'bold'
    },
  });
}
