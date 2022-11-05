import { useState } from 'react';
import { Text, TextInput, TextInputProps, TouchableOpacity, View } from 'react-native';

import { COLORS } from '../../../constants';
import passwordTextFieldStyles from './styles';

type Props = {
  error?: string;
};

export default function PasswordTextField({ error, ...props }: TextInputProps & Props) {
  const styles = passwordTextFieldStyles();
  const [visible, setVisible] = useState(false);

  const handleChangeVisibility = () => {
    setVisible(!visible);
  };

  return (
    <View>
      <View style={styles.container}>
        <TextInput
          {...props}
          secureTextEntry={!visible}
          selectionColor={COLORS.green}
          style={styles.input}
        />
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => {
            handleChangeVisibility();
          }}>
          <Text>{visible ? 'Esconder' : 'Mostrar'}</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.errorText}>{error}</Text>
    </View>
  );
}
