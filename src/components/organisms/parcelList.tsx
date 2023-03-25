import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from "react-native";
import { Parcel } from "../../utils/types/Parcel.type";
import ParcelItem from "../atoms/parcelItem";

type ParcelListProps = { data: any };

export default function ParcelList({ data }: ParcelListProps) {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <ParcelItem element={item} />}
        keyExtractor={(item) => item.id.$oid}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});
