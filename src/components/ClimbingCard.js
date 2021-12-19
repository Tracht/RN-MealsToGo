import React from "react";
import { Button, Card } from 'react-native-paper';
// Components
import { Container } from "./Container";
import { BodyText, Title, Caption, SuccessText, ErrorText } from "./Text";
import {
  ClimbingContainer, 
  StyledCard, Cover, 
  Content
} from "./ClimbingCard.styles";

export const ClimbingCard = ({ name, photos, address, bestMonths, numRoutes, isOpen }) => {
  return (
    <ClimbingContainer>
        <StyledCard elevation={5}>
          <Container margins={["l","","l","l"]} flex={1} flexdir="row" ai="center" jc="space-between">
            <Title>{name}</Title>
              {isOpen ? 
                  <SuccessText type="caption">Open</SuccessText>
                : <ErrorText type="caption">Closed</ErrorText> 
                }
          </Container>

          <Cover key={name} source={{ uri: photos[0] }}/>
        
          <Content>
            <Container flex={1} flexdir="row" ai="center" jc="space-between">
                <Caption>{bestMonths}</Caption>
                <Caption>{numRoutes} route{numRoutes === 1 ? '' : 's'}</Caption>
            </Container>
            <BodyText>{address}</BodyText>
          </Content> 

          <Card.Actions>
            <Button>See routes</Button>
          </Card.Actions>

        </StyledCard>
    </ClimbingContainer>
  )
}