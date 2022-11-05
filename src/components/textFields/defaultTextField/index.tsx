import { Text, TextInput, TextInputProps, View } from 'react-native';
import { MaskedTextInput } from 'react-native-mask-text';

import { COLORS } from '../../../constants';
import textFieldStyles from './styles';

type Props = {
  error?: string;
  mask?: boolean;
  maskText?: string;
};

export type DefaultTextFieldProps = TextInputProps & Props;

export default function DefaultTextField({
  error,
  maskText,
  mask,
  onChangeText,
  ...props
}: DefaultTextFieldProps) {
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
