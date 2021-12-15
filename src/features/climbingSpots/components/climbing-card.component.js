import React from "react";
import { StyleSheet, View } from "react-native";
import { Avatar, Button, Card, Text, Paragraph } from 'react-native-paper';

const StarRating = props => <Avatar.Icon {...props} icon="star" />

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
    <View style={styles.container}>
      <Card elevation={5} style={styles.card}>
        <Card.Title title={name}
          left={false} // or icon, StarRating
        />
        <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }}/>
        <Card.Content>
          <Text>{numberOfRoutes} routes</Text>
          <Text>{bestMonths}</Text>
          <Text>{address}</Text>
        </Card.Content>
        <Card.Actions>
          <Button>See routes</Button>
        </Card.Actions>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%"
  },  
  card: { 
    backgroundColor: "white",
  },
  cover: {
    margin: 16,
    backgroundColor: "white",
  },
})