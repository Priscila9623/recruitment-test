import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontFamilies } from '../../styles/typography';
import { colors } from '../../styles/colors';
import { TabStackParamList } from './TabsNavigationTypes';
import { PaymentsClientsScreen } from './payments/PaymentsClientsScreen';
import { HomeScreen } from './home/HomeScreen';
import { TransactionsScreen } from './transactions/TransactionsScreen';
import { AnalyticsScreen } from './analytics/AnalyticsScreen';

const Tab = createBottomTabNavigator<TabStackParamList>();

const TabsNavigation: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelPosition: 'below-icon',
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.secondary_light,
        tabBarAllowFontScaling: false,
        tabBarLabelStyle: styles.tabLabel,
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'HOME',
        }}
      />
      <Tab.Screen
        name="Transactions"
        component={TransactionsScreen}
        options={{
          tabBarLabel: 'TRANSACTIONS',
        }}
      />
      <Tab.Screen
        name="Analytics"
        component={AnalyticsScreen}
        options={{
          tabBarLabel: 'ANALYTICS',
        }}
      />
      <Tab.Screen
        name="Payments"
        component={PaymentsClientsScreen}
        options={{
          tabBarLabel: 'PAYMENTS',
        }}
      />
    </Tab.Navigator>
  );
};

export { TabsNavigation };

const styles = StyleSheet.create({
  tabLabel: {
    fontSize: 12,
    ...FontFamilies.Roboto_regular,
  },
});
