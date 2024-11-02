import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function FoodIngredients({ data }) {
  return data.map((dataIng) => (
    <View key={dataIng} style={styles.listItem}>
      <Text style={styles.itemText}>{dataIng}</Text>
    </View>
  ));
}

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: "orange",
    marginVertical: 4,
    marginHorizontal: 12,
    borderRadius: 10,
    paddingVertical: 4,
  },
  itemText: {
    textAlign: "center",
  },
});
