import React from "react";
import styled from "styled-components/native";
import { View } from "react-native";
import { Avatar, Button, Text, Card } from 'react-native-paper';

const StarRating = props => <Avatar.Icon {...props} icon="star" />

const ClimbingView = styled(View)`
  width: 100%;
`
const StyledCard = styled(Card)`
  background: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.sizes[0]};
`
const Title = styled(Card.Title)`
  padding: ${(props) => props.theme.space[3]};
  color: ${(props) => props.theme.colors.darkGrey};
`
const Cover = styled(Card.Cover)`
  margin: ${(props) => props.theme.space[3]};
  background: ${(props) => props.theme.colors.white};
`

const Content = styled(Card.Content)``


export const ClimbingCard = ({ climbingSpot = {} }) => {

  const { 
    name = 'One Two Three', 
    icon,
    photos = ['https://www.backpackerswanderlust.com/wp-content/uploads/2021/03/ao-nang-to-railay-beach-5.jpg', 'https://www.backpackerswanderlust.com/wp-content/uploads/2021/03/ao-nang-to-railay-beach-2.jpg', ],
    address = 'Railay Beach, Krabi, Thailand',
    bestMonths = ['November - March'],
    numberOfRoutes = 31,
  } = climbingSpot;

  return (
    <ClimbingView>
      <StyledCard elevation={5}>
        <Title
          title={name}
          left={false} // or icon, StarRating
        />
        <Cover key={name} source={{ uri: photos[0] }}/>
        <Content>
          <Text>{numberOfRoutes} routes</Text>
          <Text>{bestMonths}</Text>
          <Text>{address}</Text>
        </Content>
        <Card.Actions>
          <Button>See routes</Button>
        </Card.Actions>
      </StyledCard>
    </ClimbingView>
  )
}