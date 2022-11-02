import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '.';
import {
  AddEmployeesScreen,
  CreateCompanyScreen,
  EmployeesListScreen,
  ForgotPasswordScreen,
  LoginScreen,
  QRCodeScreen,
  QVTIndexScreen,
  RateScreen,
  SignUpScreen,
} from './src/screens';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            header: () => undefined,
          }}
        />
        <Stack.Screen
          name="Signup"
          component={SignUpScreen}
          options={{
            header: () => undefined,
          }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPasswordScreen}
          options={{
            header: () => undefined,
          }}
        />
        <Stack.Screen
          name="Rate"
          component={RateScreen}
          options={{
            header: () => undefined,
          }}
        />
        <Stack.Screen
          name="CreateCompany"
          component={CreateCompanyScreen}
          options={{
            header: () => undefined,
          }}
        />
        <Stack.Screen
          name="QVTIndex"
          component={QVTIndexScreen}
          options={{
            header: () => undefined,
          }}
        />
        <Stack.Screen
          name="QRCode"
          component={QRCodeScreen}
          options={{
            header: () => undefined,
          }}
        />
        <Stack.Screen
          name="EmployeesList"
          component={EmployeesListScreen}
          options={{
            header: () => undefined,
          }}
        />
        <Stack.Screen
          name="AddEmployees"
          component={AddEmployeesScreen}
          options={{
            header: () => undefined,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
