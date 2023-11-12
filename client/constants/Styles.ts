import { StyleSheet } from "react-native";
import Colors from "./Colors";

export default StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },

  center: {
    alignContent: "center",
    justifyContent: "center",
  },

  selfCenter: {
    alignSelf: "center",
  },

  rounded: {
    borderRadius: 15,
  },

  // bkgr colors

  container: {
    backgroundColor: Colors.light.containerBackground,
  },

  transparent: {
    backgroundColor: "transparent",
  },

  // content spacing

  marginSmall: {
    margin: 5,
  },

  marginBig: {
    margin: 20,
  },

  padding: {
    padding: 20,
  },

  // orentations

  row: {
    flexDirection: "row",
  },

  // box sizes

  boxSizeBig: {
    width: "50%",
    height: "50%",
  },

  boxSizeSmall: {
    width: "35%",
    height: "35%",
  },

  // text and input

  input: {
    padding: 10,
    backgroundColor: Colors.light.inputBackground,
  },

  title: {
    textAlign: "center",
    color: Colors.light.text,
    fontWeight: "bold",
    fontSize: 30,
  },

  // button

  flatButton: {
    backgroundColor: Colors.light.primary,
    padding: 10,
    borderRadius: 5,
  },

  flatButtonText: {
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
  },
});
