import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  StatusBar,
  Text,
  TouchableOpacity,
  Modal,
  Alert,
  Pressable,
} from "react-native";
import ParcelItem from "../atoms/parcelItem";
import { FloatingLabelInput } from "react-native-floating-label-input";
import DropDownPicker from "react-native-dropdown-picker";

type ParcelListProps = { data: any };

export default function ParcelList({ data }: ParcelListProps) {
  const [modalVisible, setModalVisible] = useState(false);
  const [parcel, setParcel] = useState("");

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
  ]);
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
          onPress={() => setModalVisible(true)}
          style={[styles.button, styles.buttonPlus]}
        ></TouchableOpacity>
      </View>
      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>
              Parcel and carrier information
            </Text>

            <FloatingLabelInput
              label="ID"
              value={parcel}
              staticLabel
              hintTextColor={"#aaa"}
              containerStyles={{
                height: 56,
                borderWidth: 2,
                backgroundColor: "#fff",
                borderColor: "#DDDDDE",
                borderRadius: 6,
              }}
              customLabelStyles={{
                colorFocused: "rgba(58, 53, 65, 0.68)",
                fontSizeFocused: 12,
              }}
              labelStyles={{
                backgroundColor: "#fff",
                paddingHorizontal: 5,
              }}
              inputStyles={{
                color: " rgba(58, 53, 65, 0.87)",
                paddingTop: 17,
                paddingRight: 12,
                paddingBottom: 15,
                paddingLeft: 17,
              }}
              onChangeText={(value) => {
                setParcel(value);
              }}
            />
            <View
              style={[
                {
                  marginTop: 20,
                },
              ]}
            >
              <View
                style={[
                  {
                    marginLeft: 15,
                    backgroundColor: "#6638f0",
                    zIndex: 1,
                  },
                ]}
              >
                <Text style={styles.dropdownLabel}>Carrier ID</Text>
              </View>
              <View>
                <DropDownPicker
                  open={open}
                  value={value}
                  items={items}
                  setOpen={setOpen}
                  setValue={setValue}
                  setItems={setItems}
                />
              </View>
            </View>

            <Pressable
              style={[styles.button, styles.buttonModal]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>ADD</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
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
  buttonPlus: {
    width: 48,
    height: 48,
    padding: 17,
  },

  centeredView: {
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    height: "100%",
    flex: 1,
    justifyContent: "flex-end",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  dropdownLabel: {
    position: "absolute",
    backgroundColor: "white",
  },
  buttonModal: {
    marginTop: 20,
    borderRadius: 5,
    paddingVertical: 11,
    width: 319,
    height: 46,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalTitle: {
    marginTop: 29,
    textAlign: "center",
    fontWeight: "500",
    fontSize: 20,
    lineHeight: 24,
  },
});
