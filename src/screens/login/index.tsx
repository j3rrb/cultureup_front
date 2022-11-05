import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Formik } from 'formik';
import { Text, View } from 'react-native';
import * as Yup from 'yup';

import { RootStackParamList } from '../../..';
import { ConfirmationButton } from '../../components/buttons';
import { DefaultTextField, PasswordTextField } from '../../components/textFields';
import { COLORS } from '../../constants';
import loginStyles from './styles';

const formInitialValues = {
  email: undefined,
  password: undefined,
};

const LoginValidationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Too Short!').max(50, 'Too Long!').required('Required'),
});

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export default function LoginScreen({ navigation }: Props) {
  const styles = loginStyles();

  return (
    <Formik
      validationSchema={LoginValidationSchema}
      initialValues={formInitialValues}
      onSubmit={async (values) => {
        console.log(values);
        navigation.navigate('QVTIndex');
      }}>
      {({ values, errors, isSubmitting, touched, handleSubmit, handleChange, handleBlur }) => (
        <View style={styles.mainContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Entrar</Text>
          </View>
          <View style={styles.inputs}>
            <DefaultTextField
              autoCapitalize="none"
              error={errors.email && touched.email ? errors.email : undefined}
              value={values.email}
              placeholder="E-mail"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
            />
            <PasswordTextField
              autoCapitalize="none"
              error={errors.password && touched.password ? errors.password : undefined}
              placeholder="Senha"
              value={values.password}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
            />
          </View>
          <View style={styles.buttons}>
            <ConfirmationButton
              disabled={isSubmitting}
              onPress={(e) => {
                handleSubmit();
              }}
              color={COLORS.green}
              text="Entrar"
            />
            <ConfirmationButton
              onPress={(e) => {
                navigation.navigate('Signup');
              }}
              color={COLORS.green}
              text="Criar conta"
            />
            <ConfirmationButton
              onPress={(e) => {
                navigation.navigate('ForgotPassword');
              }}
              text="Esqueceu a senha?"
            />
          </View>
        </View>
      )}
    </Formik>
  );
}
