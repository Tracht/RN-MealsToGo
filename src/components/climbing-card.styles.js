import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { View, Text } from "react-native";

export const ClimbingContainer = styled(View)`
  width: 100%;
  marginTop: ${(props) => props.theme.space.md}
  marginBottom: ${(props) => props.theme.space.md}
`
export const StyledCard = styled(Card)`
  background: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.sizes.sm};
`
export const Adddress = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.caption};
`
export const Title = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.title} /* Seems that react-native-paper is overriding? */
  color: ${(props) => props.theme.colors.darkGrey};
  margin-left: ${(props) => props.theme.space.lg};
  margin-right: ${(props) => props.theme.space.lg};
`
export const Open = styled(Text)`
  color: ${(props) => props.theme.colors.success};
  font-size: ${(props) => props.theme.fontSizes.caption};
  margin-left: ${(props) => props.theme.space.lg};
  margin-right: ${(props) => props.theme.space.lg};
`
export const Closed = styled(Text)`
  color: ${(props) => props.theme.colors.error};
  font-size: ${(props) => props.theme.fontSizes.caption};
  margin-left: ${(props) => props.theme.space.lg};
  margin-right: ${(props) => props.theme.space.lg};
`
export const Cover = styled(Card.Cover)`
  margin: ${(props) => props.theme.space.md};
  background: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.sizes.sm};
  margin-top: ${(props) => props.theme.space.lg};
  margin-bottom: ${(props) => props.theme.space.sm};
`
export const Section = styled(View)`
  flex-direction: row;
  align-items: center;
`
export const SectionEnd = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`
export const Header = styled(View)`
  flex-direction: row;
  align-items: center;
  margin-top: ${(props) => props.theme.space.lg};
`
export const HeaderEnd = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`

export const Content = styled(Card.Content)``