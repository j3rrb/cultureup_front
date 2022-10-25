import { Formik } from 'formik';
import { Text, View } from 'react-native';
import * as Yup from 'yup';

import { ConfirmationButton, DefaultTextField } from '../../components';
import { COLORS } from '../../constants';
import createCompanyStyles from './styles';

const formInitialState = {
  name: undefined,
  cnpj: undefined,
};

const CreateCompanyValidationSchema = Yup.object().shape({
  name: Yup.string().min(4, 'Too short!').max(100, 'Too long!').required('Required'),
  cnpj: Yup.string()
    .matches(new RegExp('[0-9]{2}.[0-9]{3}.[0-9]{3}/[0-9]{4}-[0-9]{2}'), {
      message: 'CNPJ inválido',
    })
    .required('Required'),
});

export default function CreateCompany() {
  const styles = createCompanyStyles();

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Cadastre sua empresa</Text>
      </View>
      <Formik
        validationSchema={CreateCompanyValidationSchema}
        initialValues={formInitialState}
        onSubmit={async (values: { name?: string; cnpj?: string }) => {
          if (values.cnpj) {
            const body = { ...values, cnpj: values.cnpj.split(/\W/).join('') };

            console.log(body);
          }
        }}>
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
          <View style={styles.formContainer}>
            <View style={styles.inputs}>
              <DefaultTextField
                autoCapitalize="characters"
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                placeholder="Razão social"
                value={values.name}
                error={errors.name && touched.name ? errors.name : undefined}
              />
              <DefaultTextField
                onChangeText={handleChange('cnpj')}
                onBlur={handleBlur('cnpj')}
                error={errors.cnpj && touched.cnpj ? errors.cnpj : undefined}
                value={values.cnpj}
                mask
                maskText="99.999.999/9999-99"
                placeholder="CNPJ"
                keyboardType="numeric"
              />
            </View>
            <ConfirmationButton
              color={COLORS.green}
              text="Cadastrar"
              onPress={() => {
                handleSubmit();
              }}
            />
          </View>
        )}
      </Formik>
    </View>
  );
}
