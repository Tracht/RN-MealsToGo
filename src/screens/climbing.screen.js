import React, {useState} from "react";
import styled from "styled-components/native";
import { StatusBar, SafeAreaView, View, FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
// Components
import { ClimbingCard } from "../components/climbing-card.js";
// Data
import { CLIMBING_SPOTS } from "../climbing-spot-list";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.almond};
  /* android */
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
  ${StatusBar.currentHeight && `padding-bottom: ${StatusBar.currentHeight * 3}px`};
`
const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space.lg};
  justify-content: center;
`
const ClimbingListContainer = styled(View)`
  padding: ${(props) => props.theme.space.lg};
  paddingTop: ${(props) => props.theme.space.sm};
`

export const ClimbingScreen = () => {

  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = query => setSearchQuery(query);

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
      <SearchContainer>
        <Searchbar 
          placeholder="Start searching"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </SearchContainer> 
      
      <ClimbingListContainer>
        <FlatList
          data={CLIMBING_SPOTS}
          renderItem={climbingCardItem}
          keyExtractor={item => item.id}
        />
      </ClimbingListContainer>
    </SafeArea>
  )
}
