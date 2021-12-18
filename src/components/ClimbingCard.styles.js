import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { View, Text } from "react-native";

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

export const Section = styled(View)`
  flex-direction: row;
  align-items: center;
`
export const SectionEnd = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`
export const Header = styled(Section)`
  margin-top: ${(props) => props.theme.sizes.l};
`
export const HeaderEnd = styled(SectionEnd)``

export const Cover = styled(Card.Cover)`
  background: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.sizes.s};
  margin: ${(props) => props.theme.sizes.m};
  margin-top: ${(props) => props.theme.sizes.l};
  margin-bottom: ${(props) => props.theme.sizes.s};
`

export const StyledText = styled(Text)`
  margin-left: ${(props) => props.theme.sizes.l};
  margin-right: ${(props) => props.theme.sizes.l};
`
export const Title = styled(StyledText)`
  font-size: ${(props) => props.theme.fontSizes.title} /* To DO: Not working */
  color: ${(props) => props.theme.colors.darkGrey};
`
export const Open = styled(StyledText)`
  font-size: ${(props) => props.theme.fontSizes.caption};
  color: ${(props) => props.theme.colors.success};
`
export const Closed = styled(StyledText)`
  font-size: ${(props) => props.theme.fontSizes.caption};
  color: ${(props) => props.theme.colors.error};
`

export const Adddress = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.caption};
`

