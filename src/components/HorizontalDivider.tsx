import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

interface HorizontalDividerProps {
  style?: StyleProp<ViewStyle>;
}

export const HorizontalDivider: React.FC<HorizontalDividerProps> = props => {
  return <View style={[styles.container, props.style]} />;
};

const styles = StyleSheet.create({
  container: {
    height: 1,
    backgroundColor: '#EEEEEE',
    borderColor: '#EEEEEE',
  },
});
