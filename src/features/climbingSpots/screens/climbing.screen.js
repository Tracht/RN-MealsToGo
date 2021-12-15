import React, {useState} from "react";
import { StatusBar, StyleSheet, SafeAreaView, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { ClimbingCard } from "../components/climbing-card.component";

export const ClimbingScreen = () => {

  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar 
          placeholder="Start searching"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View> 
      
      <View style={styles.list}>
        <ClimbingCard />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B6D0E2",
    marginTop: StatusBar.currentHeight, // StatusBar only works for Android
  },
  search: {
    padding: 16,
    backgroundColor: "#5E84E2", // periwinkle
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    padding: 16,
    backgroundColor: "#B6D0E2", // powerderBlue
    alignItems: "center",
    justifyContent: "center",
  },
});
