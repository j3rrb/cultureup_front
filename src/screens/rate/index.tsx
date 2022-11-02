import { View, Text, TouchableOpacity } from 'react-native';
import { DefaultTextField, ConfirmationButton } from '../../components';
import rateStyles from './styles';
import { Formik } from 'formik';
import { COLORS } from '../../constants';
import { useState } from 'react';
import { width100 } from '../../utils/dimensions';
import * as Yup from 'yup';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../..';

type Props = NativeStackScreenProps<RootStackParamList, 'Rate'>;

const formInitialState = {
  message: '',
};

const RateValidationSchema = Yup.object().shape({
  message: Yup.string().required('Required'),
});

export default function RateScreen({ navigation }: Props) {
  const styles = rateStyles();
  const [messageType, setMessageType] = useState(true);

  return (
    <View>
      <View style={styles.header}>
        {navigation.canGoBack() && (
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={styles.headerButton}>
            <Text style={styles.headerButtonText}>Voltar</Text>
          </TouchableOpacity>
        )}
        <Text style={styles.headerTitle}>Avaliar</Text>
      </View>
      <Formik
        validationSchema={RateValidationSchema}
        onSubmit={(values) => {
          console.log({ messageType, ...values });
        }}
        initialValues={formInitialState}>
        {({ errors, handleBlur, handleChange, values, touched, handleSubmit }) => (
          <View style={styles.formContainer}>
            <View>
              <Text style={styles.textLabel}>Sua mensagem é:</Text>
            </View>
            <View style={styles.buttons}>
              <ConfirmationButton
                width={width100 * 0.45}
                color={messageType ? COLORS.green : undefined}
                borderColor={messageType ? 'black' : undefined}
                text="Positiva"
                onPress={() => {
                  setMessageType(true);
                }}
              />
              <ConfirmationButton
                width={width100 * 0.45}
                color={!messageType ? COLORS.red : undefined}
                borderColor={!messageType ? 'black' : undefined}
                text="Negativa"
                onPress={() => {
                  setMessageType(false);
                }}
              />
            </View>
            <View>
              <DefaultTextField
                multiline
                numberOfLines={20}
                placeholder="Escreva sua mensagem aqui..."
                onChangeText={handleChange('message')}
                onBlur={handleBlur('message')}
                value={values.message}
                error={errors.message && touched.message ? errors.message : undefined}
              />
            </View>
            <View>
              <ConfirmationButton onPress={handleSubmit} color={COLORS.green} text="Enviar" />
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
}
