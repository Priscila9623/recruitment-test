import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PaymentsNavigation } from './screens/payments/PaymentsNavigation';
import { FontFamilies } from './styles/typography';
import { Text } from './components/Text';

const Tab = createBottomTabNavigator<RootStackParamList>();

export type RootStackParamList = {
  Home: undefined;
  Transactions: undefined;
  Analytics: undefined;
  Payments: undefined;
};

function HomeScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.screenText}>Home Screen</Text>
    </View>
  );
}

function TransactionsScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.screenText}>Transactions Screen</Text>
    </View>
  );
}

function AnalyticsScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.screenText}>Analytics Screen</Text>
    </View>
  );
}

const RootNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarLabelPosition: 'below-icon',
          tabBarActiveTintColor: '#D8C295',
          tabBarInactiveTintColor: '#D0D0D0',
          tabBarAllowFontScaling: false,
          tabBarLabelStyle: styles.tabLabel,
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
          component={PaymentsNavigation}
          options={{
            tabBarLabel: 'PAYMENTS',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export { RootNavigation };

const styles = StyleSheet.create({
  tabLabel: {
    fontSize: 12,
    ...FontFamilies.Roboto_regular,
  },
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  screenText: {
    color: '#000000',
  },
});
