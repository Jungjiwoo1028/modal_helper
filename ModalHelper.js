import React from "react";
import { TouchableOpacity } from "react-native";
import { Popup } from "react-native-popup-confirm-toast";

const ModalHelper = ({ title, img, children, type }) => {
  return (
    <TouchableOpacity
      onPress={() =>
        Popup.show({
          type: type,
          title: title,
          buttonText: type === "success" ? "Skip" : "DENY",
          confirmText: "ALLOW",
          buttonContentStyle: {
            marginTop: -20,
            flexDirection: "row",
            justifyContent: "space-between",
          },
          okButtonStyle: {
            backgroundColor: "#fff",
            borderColor: "blue",
            borderRadius: 20,
            borderWidth: 2,
            flex: type === "success" ? 1 : 0.45,
            height: 40,
          },
          okButtonTextStyle: {
            fontSize: 20,
            color: "blue",
          },
          confirmButtonStyle: {
            height: 40,
            flex: 0.45,
            borderRadius: 20,
            backgroundColor: "blue",
            color: "#fff",
          },
          confirmButtonTextStyle: {
            fontSize: 20,
            color: "#fff",
          },
          icon: img,
          callback: () => {
            Popup.hide();
          },
          cancelCallback: () => {
            Popup.hide();
          },
        })
      }
    >
      {children}
    </TouchableOpacity>
  );
};

export default ModalHelper;
