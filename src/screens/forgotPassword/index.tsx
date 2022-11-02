import { Formik } from 'formik';
import { Text, TouchableOpacity, View } from 'react-native';
import * as Yup from 'yup';

import { ConfirmationButton, DefaultTextField } from '../../components';
import { COLORS } from '../../constants';
import forgotPasswordStyles from './styles';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
});

export default function ForgotPassword() {
  const styles = forgotPasswordStyles();

  return (
    <Formik
      validationSchema={validationSchema}
      onSubmit={async (values) => {
        console.log(values);
      }}
      initialValues={{
        email: undefined,
      }}>
      {({ values, errors, touched, handleSubmit, handleBlur, handleChange }) => (
        <View>
          <View style={styles.header}>
            <TouchableOpacity style={styles.headerButton}>
              <Text style={styles.headerButtonText}>Voltar</Text>
            </TouchableOpacity>
            <Text style={styles.headerText}>Recuperação de senha</Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.description}>
              Digite seu e-mail e você receberá um e-mail com um link para a criação de uma nova
              senha
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <DefaultTextField
              value={values.email}
              autoCapitalize="none"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              error={errors.email && touched.email ? errors.email : undefined}
              placeholder="E-mail"
            />
          </View>
          <View style={styles.buttonContainer}>
            <ConfirmationButton
              onPress={() => {
                handleSubmit();
              }}
              text="Enviar"
              color={COLORS.green}
            />
          </View>
        </View>
      )}
    </Formik>
  );
}
