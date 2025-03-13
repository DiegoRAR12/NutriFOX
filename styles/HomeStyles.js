import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 30,
    borderRadius: 50 / 2,
  },
  buttonContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    width: "80%",
  },
  buttonWrapper: {
    marginBottom: 20,
  },
  counterText: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 20,
    color: "white",
  },
  logoutButton: {
    position: "absolute",
    top: 40,
    right: 20,
    backgroundColor: "#ff4d4d",
    padding: 10,
    borderRadius: 5,
  },
  logoutText: {
    color: "white",
    fontWeight: "bold",
  },
});
