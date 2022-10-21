import {
  KeyboardAvoidingView,
  ScrollView,
  StyleProp,
  Text,
  View,
  ViewStyle,
} from "react-native";
import {
  ConfirmationButton,
  DefaultTextField,
  PasswordTextField,
} from "../../components";
import signUpStyles from "./styles";
import * as Yup from "yup";
import { Formik } from "formik";
import DropDownPicker from "react-native-dropdown-picker";
import { COLORS } from "../../constants";
import { useState } from "react";

const formInitialValues = {
  fullName: undefined,
  email: undefined,
  password: undefined,
  confirmPassword: undefined,
  company: undefined,
};

const SignUpValidationSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(6, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required"),
  company: Yup.number().typeError("Select a company").required("Required"),
});

const listContainerDisplayNone: StyleProp<ViewStyle> = {
  display: "none",
};

export default function SignUpScreen() {
  const styles = signUpStyles();
  const [companyOpen, setCompanyOpen] = useState(false);
  const [companyValue, setCompanyValue] = useState(null);
  const [company, setComapny] = useState([
    {
      label: "Selecione",
      value: undefined,
      selectable: false,
      disabled: true,
      containerStyle: listContainerDisplayNone,
    },
    { label: "PUCIT", value: 0 },
    { label: "UCP", value: 1 },
    { label: "UET", value: 2 },
  ]);

  return (
    <Formik
      validationSchema={SignUpValidationSchema}
      initialValues={formInitialValues}
      onSubmit={async (values) => {
        console.log(values);
      }}
    >
      {({
        values,
        errors,
        isSubmitting,
        touched,
        handleSubmit,
        handleChange,
        handleBlur,
        setFieldValue,
      }) => (
        <View style={styles.mainContainer}>
          <KeyboardAvoidingView enabled behavior="height">
            <ScrollView>
              <View style={styles.titleContainer}>
                <Text style={styles.title}>Cadastre sua conta</Text>
              </View>
              <View style={styles.inputs}>
                <DefaultTextField
                  autoCapitalize="none"
                  error={
                    errors.fullName && touched.fullName
                      ? errors.fullName
                      : undefined
                  }
                  value={values.fullName}
                  placeholder="Nome completo"
                  onChangeText={handleChange("fullName")}
                  onBlur={handleBlur("fullName")}
                />
                <DefaultTextField
                  autoCapitalize="none"
                  error={
                    errors.email && touched.email ? errors.email : undefined
                  }
                  placeholder="E-mail"
                  value={values.email}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                />
                <PasswordTextField
                  autoCapitalize="none"
                  error={
                    errors.password && touched.password
                      ? errors.password
                      : undefined
                  }
                  placeholder="Senha"
                  value={values.password}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                />
                <PasswordTextField
                  autoCapitalize="none"
                  error={
                    errors.confirmPassword && touched.confirmPassword
                      ? errors.confirmPassword
                      : undefined
                  }
                  placeholder="Confirme a senha"
                  value={values.confirmPassword}
                  onChangeText={handleChange("confirmPassword")}
                  onBlur={handleBlur("confirmPassword")}
                />
                <View>
                  <DropDownPicker
                    schema={{
                      label: "label",
                      value: "value",
                      disabled: "disabled",
                      containerStyle: "containerStyle",
                    }}
                    open={companyOpen}
                    value={companyValue}
                    items={company}
                    setOpen={setCompanyOpen}
                    setValue={setCompanyValue}
                    setItems={setComapny}
                    placeholder="Selecione a empresa"
                    activityIndicatorColor="#5188E3"
                    onChangeValue={(value) => {
                      setFieldValue("company", value);
                    }}
                    zIndex={1000}
                    zIndexInverse={3000}
                    ListEmptyComponent={() => (
                      <Text style={styles.emptyListMessage}>Vazio</Text>
                    )}
                  />
                  <Text style={styles.errorMessage}>{errors.company}</Text>
                </View>
              </View>
              <View style={styles.buttons}>
                <ConfirmationButton
                  disabled={isSubmitting}
                  onPress={(e) => {
                    handleSubmit();
                  }}
                  color={COLORS.green}
                  text="Cadastrar"
                />
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </View>
      )}
    </Formik>
  );
}
