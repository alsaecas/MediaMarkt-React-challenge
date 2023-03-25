import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Parcel } from "../../utils/types/Parcel.type";

type ItemProps = { element: Parcel };

export default function ParcelItem({ element }: ItemProps) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{element.pickupDate}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
