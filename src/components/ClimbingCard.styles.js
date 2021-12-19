import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { View } from "react-native";

export const ClimbingContainer = styled(View)`
  width: 100%;
  marginTop: ${(props) => props.theme.sizes.m}
  marginBottom: ${(props) => props.theme.sizes.m}
`
export const StyledCard = styled(Card)`
  background: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.sizes.s};
`
export const Content = styled(Card.Content)``

export const Cover = styled(Card.Cover)`
  background: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.sizes.s};
  margin: ${(props) => props.theme.sizes.m};
  margin-top: ${(props) => props.theme.sizes.l};
  margin-bottom: ${(props) => props.theme.sizes.s};
`
