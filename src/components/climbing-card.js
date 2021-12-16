import React from "react";
import { Button, Card } from 'react-native-paper';
import { Text } from "../typography/text"
import {
  ClimbingContainer,
  StyledCard,
  Adddress,
  Title,
  Open,
  Closed,
  Cover,
  Section,
  SectionEnd,
  Header,
  HeaderEnd,
  Content
} from "./climbing-card.styles";

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
              <Text variant="caption">{bestMonths}</Text>
            <SectionEnd>
              <Text variant="disabled">{numRoutes} route{numRoutes === 1 ? '' : 's'}</Text>
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