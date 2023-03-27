import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  StatusBar,
  Text,
  TouchableOpacity,
  Modal,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";
import ParcelItem from "../atoms/parcelItem";
import { FloatingLabelInput } from "react-native-floating-label-input";
import DropDownPicker from "react-native-dropdown-picker";
import carriers from "../../../assets/db/carriers_mm.json";
import data from "../../../assets/db/carrieX_db.json";

import { parseCarriexDB } from "../../utils/dbInteractions";

export default function ParcelList() {
  const [modalVisible, setModalVisible] = useState(false);
  const [parcel, setParcel] = useState("");

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(
    carriers.map((carrier) => {
      return { label: carrier.id.$oid, value: carrier.id.$oid };
    })
  );
  const [listElements, setListElements] = useState([]);

  useEffect(() => {
    setListElements(parseCarriexDB(data));
  }, [data]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={listElements}
        renderItem={({ item }) => <ParcelItem element={item} />}
        keyExtractor={(item) => item.date}
        ItemSeparatorComponent={ItemDivider}
      />
      <View style={styles.footer}>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={[styles.button, styles.buttonPlus]}
        ></TouchableOpacity>
      </View>
      <Modal animationType="none" transparent={true} visible={modalVisible}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.centeredView}
        >
          <TouchableWithoutFeedback
            onPress={() => setModalVisible(!modalVisible)}
          >
            <View
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
              }}
            />
          </TouchableWithoutFeedback>
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
                  zIndex: 1,
                  marginTop: 17,
                  width: "100%",
                },
              ]}
            >
              {open ? null : (
                <View
                  style={[
                    {
                      marginLeft: 15,
                      backgroundColor: "#6638f0",
                      zIndex: 2,
                    },
                  ]}
                >
                  <Text style={styles.dropdownLabel}>Carrier ID</Text>
                </View>
              )}
              <View
                style={[
                  {
                    marginTop: 8,
                    height: 56,
                  },
                ]}
              >
                <DropDownPicker
                  open={open}
                  value={value}
                  items={items}
                  setOpen={setOpen}
                  setValue={setValue}
                  setItems={setItems}
                  dropDownContainerStyle={{
                    borderWidth: 2,
                    borderColor: "#DDDDDE",
                  }}
                  style={{
                    height: 56,
                    borderWidth: 2,
                    borderColor: "#DDDDDE",
                    borderRadius: 6,
                  }}
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
        </KeyboardAvoidingView>
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
    paddingHorizontal: 5,
    color: "rgba(58, 53, 65, 0.68)",
    fontSize: 14,
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
    marginBottom: 39,
    marginTop: 29,
    textAlign: "center",
    fontWeight: "500",
    fontSize: 20,
    lineHeight: 24,
  },
});
