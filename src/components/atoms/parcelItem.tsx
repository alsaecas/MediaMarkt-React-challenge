import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Parcel } from "../../utils/types/Parcel.type";

type ItemProps = { element: Parcel };

export default function ParcelItem({ element }: ItemProps) {
  return (
    <View style={styles.item}>
      <View style={styles.left}>
        <Text style={styles.title}>
          {"Parcel List " + element.deliveryDate}
        </Text>
        <Text style={styles.carriers}>
          4 carriers will pick up the parcel today
        </Text>
        <Text style={styles.carriers}>14 items</Text>
      </View>
      <View style={styles.rigth}>
        <Text style={styles.date}>{element.pickupDate}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    paddingVertical: 15,

    justifyContent: "space-between",
  },
  left: {
    display: "flex",
    marginLeft: 34,
    gap: 1,
  },
  rigth: {
    display: "flex",
    marginRight: 34,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 19,
  },
  carriers: {
    fontWeight: "400",
    fontSize: 10,
    lineHeight: 12,
  },

  date: {
    fontWeight: "500",
    fontSize: 10,
    lineHeight: 12,
    color: "#DF0000",
  },
});
