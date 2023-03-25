import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ParcelList from "../components/organisms/parcelList";

import data from "../../assets/db/parcels_mm.json";
import { Parcel } from "../utils/types/Parcel.type";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ParcelList data={data} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
