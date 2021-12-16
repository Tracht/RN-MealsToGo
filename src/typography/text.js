import styled from "styled-components/native";

const defaultTextStyles = (theme) => {`
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.darkGrey};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`}

const body = (theme) => {`
  font-size: ${theme.fontSizes.body};
`}

const caption = (theme) => {`
  font-size: ${theme.fontSizes.caption};
  font-weight: ${theme.fontWeights.bold};
`}

const label = (theme) => {`
  font-size: ${theme.fontSizes.body};
  font-weight: ${theme.fontSizes.medium};
`}

const error = (theme) => {`
  color: ${theme.colors.error}
`}

const success = (theme) => {`
  color: ${theme.colors.success}
`}

const disabled = (theme) => {`
  color: ${theme.colors.disabled}
`}


const variants = {
  body, 
  label,
  caption, 
  error,
  success,
  disabled,
}

// <Text variant="success" />
export const Text = styled.Text`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant, theme }) => variants[variant](theme)}
`

Text.defaultProps = {
  variant: "body",
}