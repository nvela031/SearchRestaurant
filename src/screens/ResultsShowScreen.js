import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import yelp from "../api/yelp";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");
  //printing the id console
  //console.log(id);

  //printing out the restaurant data by id
  // console.log(result);

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);

    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.titleStyle}>{result.name}</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.imageStyle} source={{ uri: item }} />;
        }}
      />

      <ScrollView style={{ marginTop: 5, marginBottom: 5 }}>
        <Text style={styles.ratingStyle}>
          <MaterialIcons name='stars' />
          Rating: {result.rating}
        </Text>
        <Text style={styles.phoneStyle}>
          <Entypo name='phone' />
          Phone: {result.phone}
        </Text>
        <Text style={styles.location}>
          <Entypo name='location-pin' />
          Location: {result.location.address1}
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 14,
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: 5,
    marginBottom: 5,
  },
  imageStyle: {
    height: 200,
    width: 300,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 4,
    alignSelf: "center",
  },
  ratingStyle: {
    alignSelf: "center",
    paddingTop: 5,
    paddingBottom: 5,
  },
  phoneStyle: {
    alignSelf: "center",
    paddingTop: 5,
    paddingBottom: 5,
  },
  location: {
    alignSelf: "center",
    paddingTop: 5,
    paddingBottom: 5,
  },
});

export default ResultsShowScreen;
