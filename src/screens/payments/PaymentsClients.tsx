import React from 'react';
import { SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import { PaymentsNavigationProp } from './PaymentsNavigationTypes';
import { Text } from '../../components/Text';

export interface PaymentsClientsScreenProps {
  navigation: PaymentsNavigationProp<'PaymentsClients'>;
  route: PaymentsNavigationProp<'PaymentsClients'>;
}

const PaymentsClientsScreen: React.FC<PaymentsClientsScreenProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.screenText}>Home!</Text>
      <TouchableOpacity onPress={() => navigation.navigate('PaymentsClientDetails')}>
        <Text style={styles.screenText}>Go details</Text>
      </TouchableOpacity>
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

export { PaymentsClientsScreen };
