import React from 'react';
import { View } from 'react-native';
import styled, { useTheme } from 'styled-components/native';

const getLayout = (margins, paddings, width, height, flex, flexdir, jc, ji, js, ac, ai, as, theme) => {
  // Explanation:
  // if margins !== array and is a single value, apply it to all
  // if there is no value, then give it size 0px
  const marginTop = Array.isArray(margins) && margins[0] || margins || '0px'; 
  const marginBottom = Array.isArray(margins) && margins[1] || margins || '0px';
  const marginLeft = Array.isArray(margins) && margins[2] || margins || '0px';
  const marginRight = Array.isArray(margins) && margins[3] || margins || '0px';

  const paddingTop = Array.isArray(paddings) && paddings[0] || paddings || '0px';
  const paddingBottom = Array.isArray(paddings) && paddings[1] || paddings || '0px';
  const paddingLeft = Array.isArray(paddings) && paddings[2] || paddings || '0px';
  const paddingRight = Array.isArray(paddings) && paddings[3] || paddings || '0px';

  const result = `
    margin-top: ${theme.sizes[marginTop]};
    margin-bottom: ${theme.sizes[marginBottom]};
    margin-left: ${theme.sizes[marginLeft]};
    margin-right: ${theme.sizes[marginRight]};

    padding-top: ${theme.sizes[paddingTop]};
    padding-bottom: ${theme.sizes[paddingBottom]};
    padding-left: ${theme.sizes[paddingLeft]};
    padding-right: ${theme.sizes[paddingRight]};

    ${width ? `width: ${width}` : ""};
    ${height ? `height: ${height}` : ""};

    ${flex ? `flex: ${flex}` : ""};
    ${flexdir ? `flex-direction: ${flexdir}` : ""};

    ${jc ? `justify-content: ${jc}` : ""}
    ${ji ? `justify-items: ${ji}` : ""}
    ${js ? `justify-self: ${js}` : ""}

    ${ac ? `align-content: ${ac}` : ""}
    ${ai ? `align-items: ${ai}` : ""}
    ${as ? `align-self: ${as}` : ""}
  `
  return result;
}

const ContainerView = styled(View)`
  ${(props) => props.layout};
`;

// <Container margins="m" paddings={["l", "m", "s", "s"]} />
export const Container = ({ margins = false, paddings = false, width, height, flex, flexdir, jc, ji, js, ac, ai, as, children }) => {
  const theme = useTheme();
  const layout = getLayout(margins, paddings, width, height, flex, flexdir, jc, ji, js, ac, ai, as, theme);
  return <ContainerView layout={layout}>{children}</ContainerView>;
};