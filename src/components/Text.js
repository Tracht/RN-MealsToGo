import styled from "styled-components/native";

// BodyText and dervied Components
export const BodyText = styled.Text`
  font-weight: ${({theme}) => theme.fontWeights.regular};
  color: ${({theme}) => theme.colors.darkGrey};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`

export const Label = styled(BodyText)`
  font-weight: ${({theme}) => theme.fontWeights.medium};
`

export const Caption = styled(BodyText)`
  font-size: ${({theme}) => theme.fontSizes.caption};
  font-weight: ${({theme}) => theme.fontWeights.bold};
`

export const SuccessText = styled(BodyText)`
  color: ${({theme}) => theme.colors.success};
  font-size: ${(props) => props.type === "caption" && props.theme.fontSizes.caption};
  font-weight: ${(props) => props.type === "caption" && props.theme.fontWeights.bold}};
  text-transform: ${(props) => props.transform === "none" ? "none" : "uppercase"};
`

export const ErrorText = styled(BodyText)`
  color: ${({theme}) => theme.colors.error};
  font-size: ${(props) => props.type === "caption" && props.theme.fontSizes.caption};
  font-weight: ${(props) => props.type === "caption" && props.theme.fontWeights.bold}};
  text-transform: ${(props) => props.transform === "none" ? "none" : "uppercase"};
`

export const DisabledText = styled(BodyText)`
  color: ${({theme}) => theme.colors.disabled};
`

export const Title = styled(BodyText)`
  font-size: ${({theme}) => theme.fontSizes.title};
  font-weight: ${({theme}) => theme.fontWeights.medium};
`

// Dervied Title Components
export const HeaderXS = styled(Title)`
  font-size: ${({theme}) => theme.fontSizes.h5};
`

export const HeaderSm = styled(Title)`
  font-size: ${({theme}) => theme.fontSizes.h4};
`

export const HeaderMed = styled(Title)`
  font-size: ${({theme}) => theme.fontSizes.h3};
`

export const HeaderLrg = styled(Title)`
  font-size: ${({theme}) => theme.fontSizes.h2};
`

export const HeaderXL = styled(Title)`
  font-size: ${({theme}) => theme.fontSizes.h1};
`
