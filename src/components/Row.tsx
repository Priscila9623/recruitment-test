import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

interface RowProps {
  style?: StyleProp<ViewStyle>;
}

export const Row: React.FC<RowProps> = props => {
  return <View style={[styles.container, props.style]}>{props.children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
