import React from "react";
import { View, StyleSheet, Text } from "react-native";

type ItemProps = { element: any };

export default function ParcelItem({ element }: ItemProps) {
  return (
    <View style={styles.item}>
      <View style={styles.left}>
        <Text style={styles.title}>{"Parcel List " + element.date}</Text>
        <Text style={styles.carriers}>
          {element.carriers + " carriers will pick up the parcel today"}
        </Text>
        <Text style={styles.carriers}>{element.items + " items"}</Text>
      </View>
      <View style={styles.rigth}>
        <Text style={styles.date}>{element.date}</Text>
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
