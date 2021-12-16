import React from 'react';
import { DefaultTheme, NavigationContainer, NavigatorScreenParams } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PaymentsClientDetailsScreenParams } from './screens/payments/PaymentsClientDetailsScreen';
import { PaymentsClientDetailsScreen } from './screens/payments/PaymentsClientDetailsScreen';
import { TabStackParamList } from './screens/tabs/TabsNavigationTypes';
import { TabsNavigation } from './screens/tabs/TabsNavigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

export type RootStackParamList = {
  Tabs: NavigatorScreenParams<TabStackParamList>;
  PaymentsClientDetails: PaymentsClientDetailsScreenParams;
};

const RootNavigation: React.FC = () => {
  const options = {
    gestureEnabled: false,
  };
  return (
    <NavigationContainer theme={DefaultTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Tabs" component={TabsNavigation} options={options} />
        <Stack.Screen name="PaymentsClientDetails" component={PaymentsClientDetailsScreen} options={options} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export { RootNavigation };
