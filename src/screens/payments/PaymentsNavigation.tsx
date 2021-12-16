import React from 'react';
import { PaymentsStackParamList } from './PaymentsNavigationTypes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PaymentsClientsScreen } from './PaymentsClients';
import { PaymentsClientDetailsScreen } from './PaymentsClientDetails';

interface PaymentsNavigationProps {}

const Stack = createNativeStackNavigator<PaymentsStackParamList>();

export const PaymentsNavigation: React.FC<PaymentsNavigationProps> = ({}) => {
  const options = {
    gestureEnabled: false,
  };

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="PaymentsClients" component={PaymentsClientsScreen} options={options} />
      <Stack.Screen name="PaymentsClientDetails" component={PaymentsClientDetailsScreen} options={options} />
    </Stack.Navigator>
  );
};
