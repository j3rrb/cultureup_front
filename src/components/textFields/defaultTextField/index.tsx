import { Text, TextInput, TextInputProps, View } from 'react-native';
import { COLORS } from '../../../constants';
import textFieldStyles from './styles';
import { MaskedTextInput } from 'react-native-mask-text';

type Props = {
  error?: string;
  mask?: boolean;
  maskText?: string;
};

export default function DefaultTextField({
  error,
  maskText,
  mask,
  onChangeText,
  ...props
}: TextInputProps & Props) {
  const styles = textFieldStyles();

  return (
    <View>
      <View style={styles.container}>
        {mask ? (
          <MaskedTextInput
            {...props}
            onChangeText={(text: string) => {
              if (onChangeText) onChangeText(text);
            }}
            mask={maskText}
            selectionColor={COLORS.green}
            style={styles.input}
          />
        ) : (
          <TextInput
            {...props}
            onChangeText={onChangeText}
            selectionColor={COLORS.green}
            style={styles.input}
          />
        )}
      </View>
      <Text style={styles.errorText}>{error}</Text>
    </View>
  );
}
