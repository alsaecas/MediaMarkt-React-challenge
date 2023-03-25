import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  StatusBar,
  Text,
  TouchableOpacity,
} from "react-native";
import ParcelItem from "../atoms/parcelItem";

type ParcelListProps = { data: any };

export default function ParcelList({ data }: ParcelListProps) {
  const buttonClickedHandler = () => {
    console.log("You have been clicked a button!");
    // do something
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <ParcelItem element={item} />}
        keyExtractor={(item) => item.id.$oid}
        ItemSeparatorComponent={ItemDivider}
      />
      <View style={styles.footer}>
        <TouchableOpacity
          onPress={buttonClickedHandler}
          style={styles.button}
        ></TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const ItemDivider = () => {
  return (
    <View
      style={{
        height: 1,
        width: "100%",
        backgroundColor: "rgba(58, 53, 65, 0.12)",
        marginHorizontal: 20,
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  footer: {
    width: "100%",
    height: 104,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 48,
    height: 48,
    padding: 17,
    backgroundColor: "#DF0000",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4.84,

    elevation: 5,
    borderRadius: 24,
  },
});
