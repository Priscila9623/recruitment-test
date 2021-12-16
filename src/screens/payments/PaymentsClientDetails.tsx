import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { PaymentsNavigationProp } from './PaymentsNavigationTypes';
import { Text } from '../../components/Text';

export interface PaymentsClientDetailsScreenProps {
  navigation: PaymentsNavigationProp<'PaymentsClientDetails'>;
  route: PaymentsNavigationProp<'PaymentsClientDetails'>;
}

const PaymentsClientDetailsScreen: React.FC<PaymentsClientDetailsScreenProps> = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.screenText}>Details</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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

export { PaymentsClientDetailsScreen };
