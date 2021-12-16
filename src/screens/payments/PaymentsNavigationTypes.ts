import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

export type PaymentsStackParamList = {
  PaymentsClients: undefined;
  PaymentsClientDetails: undefined;
};

export type PaymentsNavigationProp<RouteName extends keyof PaymentsStackParamList> = NativeStackNavigationProp<
  PaymentsStackParamList,
  Extract<RouteName, string>
>;

export type PaymentsRouteProp<RouteName extends keyof PaymentsStackParamList> = RouteProp<
  PaymentsStackParamList,
  Extract<RouteName, string>
>;
