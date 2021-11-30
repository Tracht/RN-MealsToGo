// import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Platform, StatusBar, StyleSheet, Text, SafeAreaView, View } from 'react-native';
import { Searchbar } from 'react-native-paper';

export default function App() {

  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
      <SafeAreaView style={styles.AndroidSafeArea}>
          
          <View style={styles.search}>
            <Searchbar 
              placeholder="Start searching"
              onChangeText={onChangeSearch}
              value={searchQuery}
            />
            {/* <Text style={styles.title}>Search</Text> */}
          </View> 

          <View style={styles.body}>
            <Text style={styles.title}>our blank canvas</Text>
          </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  search: {
    padding: 16,
    backgroundColor: "#5E84E2", // periwinkle
    alignItems: "flex-start",
    justifyContent: "center",
  },
  body: {
    flex: 1,
    padding: 16,
    backgroundColor: "#B6D0E2", // powerderBlue
    alignItems: "center",
    justifyContent: "center", 
  },
  title: {
    color: "red",
  }
});
