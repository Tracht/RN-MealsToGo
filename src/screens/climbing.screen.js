import React, { useState } from "react";
import { FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
// Components
import { ClimbingCard } from "../components/ClimbingCard";
import { Container } from "../components/Container";
import { SafeArea } from "../components/SafeArea"
// Data
import { CLIMBING_SPOTS } from "../climbing-spot-list";

export const ClimbingScreen = () => {

  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = query => setSearchQuery(query);

  const searchableList = searchQuery && CLIMBING_SPOTS.filter(i => i.address.includes(searchQuery));

  const climbingCardItem = ({ item }) => ( // must be "item"
    <ClimbingCard 
      name={item.name}
      photos={item.photos}
      address={item.address}
      bestMonths={item.bestMonths}
      numRoutes={item.numRoutes}
      isOpen={item.isOpen}
    />
  );

  return (
    <SafeArea>
        <Container paddings="m" jc={"center"}>
          <Searchbar 
            placeholder="Search by country"
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
        </Container>
      
        <FlatList
          data={searchQuery ? searchableList : CLIMBING_SPOTS}
          renderItem={climbingCardItem}
          keyExtractor={item => item.id}
          contentContainerStyle={{ padding: 16 }}
        />
    </SafeArea>
  )
}
