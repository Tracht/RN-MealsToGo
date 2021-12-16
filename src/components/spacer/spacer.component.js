import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';

const TopSmall = styled(View)`
  margin-top: ${(props) => props.theme.space.sm};
`
const TopMedium = styled(View)`
  margin-top: ${(props) => props.theme.space.md};
`
const TopLarge = styled(View)`
  margin-top: ${(props) => props.theme.space.lg};
`

const LeftSmall = styled(View)`
  margin-left: ${(props) => props.theme.space.sm};
`
const LeftMedium = styled(View)`
  margin-left: ${(props) => props.theme.space.md};
`
const LeftLarge = styled(View)`
  margin-left: ${(props) => props.theme.space.lg};
`

const RightSmall = styled(View)`
  margin-right: ${(props) => props.theme.space.sm};
`
const RightMedium = styled(View)`
  margin-right: ${(props) => props.theme.space.md};
`
const RightLarge = styled(View)`
  margin-right: ${(props) => props.theme.space.lg};
`

const BottomSmall = styled(View)`
  margin-bottom: ${(props) => props.theme.space.sm};
`
const BottomMedium = styled(View)`
  margin-bottom: ${(props) => props.theme.space.md};
`
const BottomLarge = styled(View)`
  margin-bottom: ${(props) => props.theme.space.lg};
`

export const Spacer = ({ variant }) => {
  switch(variant) {
    case "top.sm":
      return <TopSmall />
    case "top.md":
      return <TopMedium />
    case "top.lg": 
      return <TopLarge />

    case "left.sm":
      return <LeftSmall />
    case "left.md":
      return <LeftMedium />
    case "left.lg": 
      return <LeftLarge />

    case "right.sm":
      return <RightSmall />
    case "right.md":
      return <RightMedium />
    case "right.lg": 
      return <RightLarge />

    case "bottom.sm":
      return <BottomSmall />
    case "bottom.md":
      return <BottomMedium />
    case "bottom.lg":
      return <BottomLarge />
  }

}