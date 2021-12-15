import React, {useState} from "react";
import { StatusBar, SafeAreaView, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { ClimbingCard } from "../components/climbing-card.component";
import styled from "styled-components/native";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: 'rgb(239,222,205)';
  margin-top: ${StatusBar.currentHeight}px;
`
const SearchContainer = styled(View)`
  padding: 16px;
  justify-content: center;
`
const ClimbingListContainer = styled(View)`
  padding: 16px;
`

export const ClimbingScreen = () => {

  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = query => setSearchQuery(query);

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
        <ClimbingCard />
      </ClimbingListContainer>
    </SafeArea>
  )
}
