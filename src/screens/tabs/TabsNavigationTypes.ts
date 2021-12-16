import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../RootNavigation';

export type TabStackParamList = {
  Home: undefined;
  Transactions: undefined;
  Analytics: undefined;
  Payments: undefined;
};

export type TabsNavigationProp<RouteName extends keyof TabStackParamList> = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, Extract<RouteName, string>>,
  NativeStackNavigationProp<RootStackParamList>
>;
