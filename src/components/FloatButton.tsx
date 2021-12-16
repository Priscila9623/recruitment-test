import React from 'react';
import { StyleProp, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';
import { colors } from '../styles/colors';

interface FloatButtonProps {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

export const FloatButton: React.FC<FloatButtonProps> = props => {
  return (
    <TouchableOpacity onPress={props.onPress} activeOpacity={0.8} style={[styles.container, props.style]}>
      {props.children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.basic_1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    position: 'absolute',
    bottom: 30,
    right: 20,
    height: 70,
    backgroundColor: colors.basic_1,
    borderRadius: 100,
    shadowColor: colors.basic_1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
