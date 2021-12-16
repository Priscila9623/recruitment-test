import React from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import { Text } from '../../../components/Text';
import { FontFamilies } from '../../../styles/typography';
import { colors } from '../../../styles/colors';
import { TabsNavigationProp } from '../TabsNavigationTypes';

export interface AnalyticsScreenProps {
  navigation: TabsNavigationProp<'Analytics'>;
}

const AnalyticsScreen: React.FC<AnalyticsScreenProps> = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.screenText}>Analytics Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.basic_2,
  },
  screenText: {
    color: colors.basic_1,
    ...FontFamilies.Lato_bold,
    fontSize: 16,
  },
});

export { AnalyticsScreen };
