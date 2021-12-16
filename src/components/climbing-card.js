import React from "react";
import styled from "styled-components/native";
import { View } from "react-native";
import { Avatar, Button, Text, Card } from 'react-native-paper';
import { Spacer } from './spacer';

const StarRating = props => <Avatar.Icon {...props} icon="star" />

const ClimbingContainer = styled(View)`
  width: 100%;
  marginTop: ${(props) => props.theme.space.md}
  marginBottom: ${(props) => props.theme.space.md}
`
const StyledCard = styled(Card)`
  background: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.sizes.sm};
`
const Adddress = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.caption};
`
const Title = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.title} /* Seems that react-native-paper is overriding? */
  color: ${(props) => props.theme.colors.darkGrey};
  margin-left: ${(props) => props.theme.space.lg};
  margin-right: ${(props) => props.theme.space.lg};
`
const Open = styled(Text)`
  color: ${(props) => props.theme.colors.success};
  font-size: ${(props) => props.theme.fontSizes.caption};
  margin-left: ${(props) => props.theme.space.lg};
  margin-right: ${(props) => props.theme.space.lg};
`
const Closed = styled(Text)`
  color: ${(props) => props.theme.colors.error};
  font-size: ${(props) => props.theme.fontSizes.caption};
  margin-left: ${(props) => props.theme.space.lg};
  margin-right: ${(props) => props.theme.space.lg};
`
const Cover = styled(Card.Cover)`
  margin: ${(props) => props.theme.space.md};
  background: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.sizes.sm};
  margin-top: ${(props) => props.theme.space.lg};
  margin-bottom: ${(props) => props.theme.space.sm};
`
const Section = styled(View)`
  flex-direction: row;
  align-items: center;
`
const SectionEnd = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`
const Header = styled(View)`
  flex-direction: row;
  align-items: center;
  margin-top: ${(props) => props.theme.space.lg};
`
const HeaderEnd = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`

const Content = styled(Card.Content)``


export const ClimbingCard = ({ name, photos, address, bestMonths, numRoutes, isOpen }) => {

  return (
    <ClimbingContainer>
      <StyledCard elevation={5}>
        <Header> 
            <Title>{name}</Title>
            <HeaderEnd>
            {isOpen ? <Open>Open</Open> : <Closed>Closed</Closed>}
            </HeaderEnd>
        </Header>
        <Cover key={name} source={{ uri: photos[0] }}/>
        <Content>
          <Section> 
              <Text>{bestMonths}</Text>
            <SectionEnd>
              <Text>{numRoutes} route{numRoutes === 1 ? '' : 's'}</Text>
            </SectionEnd>
          </Section>
          <Adddress>{address}</Adddress>
        </Content>
        <Card.Actions>
          <Button>See routes</Button>
        </Card.Actions>
      </StyledCard>
    </ClimbingContainer>
  )
}