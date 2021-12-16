import React from 'react';
import { View } from 'react-native';
import styled, { useTheme } from 'styled-components/native';

const positionVariant = {
  top: 'marginTop',
  bottom: 'marginBottom',
  left: 'marginLeft',
  right: 'marginRight',
}

const getVariant = (position, size, theme) => {
  const sizeSelected = size;
  const property = positionVariant[position];
  const sizeValue = theme.space[sizeSelected]
  return `${property}: ${sizeValue}`
}

const SpacerView = styled(View)`
  ${({ variant }) => variant};
`;

export const Spacer = ({ position, size, children }) => {
  const theme = useTheme();
  const variant = getVariant(position, size, theme);
  return <SpacerView variant={variant}>{children}</SpacerView>;
};

Spacer.defaultProps = {
  position: 'top',
  size: 'sm'
}