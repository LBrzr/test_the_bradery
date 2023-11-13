import { StyleSheet } from "react-native";
import _Colors from "./Colors";

const Colors = _Colors.light;

export default StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: Colors.background,
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
    backgroundColor: Colors.containerBackground,
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
    alignItems: "baseline",
    flexDirection: "row",
  },

  column: {
    alignItems: "baseline",
    flexDirection: "column",
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
    backgroundColor: Colors.inputBackground,
  },

  titleText: {
    color: Colors.text,
    fontWeight: "bold",
    fontSize: 20,
  },

  subtitleText: {
    fontWeight: "bold",
    color: Colors.text,
    fontSize: 15,
  },

  // button

  flatButton: {
    backgroundColor: Colors.primary,
    padding: 10,
    borderRadius: 5,
  },

  flatButtonText: {
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
  },

  outlinedButton: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    borderColor: Colors.primary,
    borderWidth: 1,
  },

  outlinedButtonText: {
    textAlign: "center",
    fontWeight: "bold",
    color: Colors.primary,
  },
});
