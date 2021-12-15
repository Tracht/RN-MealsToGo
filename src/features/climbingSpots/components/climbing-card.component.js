import React from "react";
import styled from "styled-components/native";
import { View } from "react-native";
import { Avatar, Button, Text, Paragraph, Card } from 'react-native-paper';

const StarRating = props => <Avatar.Icon {...props} icon="star" />

const ClimbingView = styled(View)`
  width: 100%;
`
const StyledCard = styled(Card)`
  background: white;
  border-radius: 8px;
`
const ClimbingTitle = styled(Card.Title)`
  padding: 16px;
  color: black;
`
const ClimbingCover = styled(Card.Cover)`
  margin: 16px;
  background: white;
`

const ClimbingContent = styled(Card.Content)``


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
        <ClimbingTitle
          title={name}
          left={false} // or icon, StarRating
        />
        <ClimbingCover key={name} source={{ uri: photos[0] }}/>
        <ClimbingContent>
          <Text>{numberOfRoutes} routes</Text>
          <Text>{bestMonths}</Text>
          <Text>{address}</Text>
        </ClimbingContent>
        <Card.Actions>
          <Button>See routes</Button>
        </Card.Actions>
      </StyledCard>
    </ClimbingView>
  )
}