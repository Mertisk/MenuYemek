import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { FOODS } from "../data/dummy-data";
import { FavoritesContext } from "../store/favoritesContext";
import Food from "../models/food";
import FoodList from "../components/FoodList";

export default function FavoritesScreen() {
  const favoriteFoodContext = useContext(FavoritesContext);

  //filter => filtrelenmişleri  ögeleri diziye atar
  const favoriteFoods = FOODS.filter((food) =>
    favoriteFoodContext.ids.includes(food.id)
  );

  if (favoriteFoods.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Favorilere herhangi bir şey eklemediniz</Text>
      </View>
    );
  }

  return <FoodList items={favoriteFoods} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: 600,
  },
});
