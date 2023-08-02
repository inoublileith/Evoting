import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Button,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import COLORS from "./colors";
import majd from "../../assets/images/majd.jpg";
import tunisia from "../../assets/images/tunisia.png";
import candidatureService from "../../services/candidature.service";

import authService from "../../services/auth.service";
import voteService from "../../services/vote.service";

const Detailss = ({ navigation, route }) => {
  const candidatures = route.params;

  const [user, setUser] = useState();
  const retrieveUser = () => {
    authService
      .GetCurrentUser()
      .then((data) => {
        setUser(JSON.parse(data));
        console.log("CurrentUserIdaa :", user.id);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    retrieveUser();
  }, [candidatures]);

  const addVote = (idcandidature) => {
    voteService
      .create(user.id, idcandidature)
      .then((response) => {
        console.log(response.data);
        Alert.alert(response.data.message);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        height: Dimensions.get("screen").height,
        width: Dimensions.get("screen").width,
      }}
    >
      <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
      {candidatures && (
        <>
          <ImageBackground style={{ flex: 0.7 }} source={majd}>
            <View style={style.header}>
            </View>
            <View style={style.imageDetails}>
              {/* <Text
                style={{
                  width: "70%",
                  fontSize: 30,
                  fontWeight: "bold",
                  color: COLORS.dark,
                  marginBottom: 20,
                }}
              >
                {candidatures.nom}
              </Text> */}
              <View style={{ flexDirection: "row" }}></View>
            </View>
          </ImageBackground>
          <View style={style.detailsContainer}>
            <View
              style={{
                flexDirection: "column",
                marginTop: 10,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  marginLeft: 5,
                  fontSize: 20,
                  color: COLORS.dark,
                  fontWeight: "bold",
                }}
              >
                Nom:{"  "}
              </Text>
              <Text
                style={{
                  marginLeft: 5,
                  fontSize: 20,
                  color: COLORS.dark,
                }}
              >
                {candidatures.nom}
                {"\n"}
              </Text>

              <Text
                style={{
                  marginLeft: 5,
                  fontSize: 20,
                  color: COLORS.dark,
                  fontWeight: "bold",
                }}
              >
                Prénom:{"  "}
              </Text>
              <Text
                style={{
                  marginLeft: 5,
                  fontSize: 20,
                  color: COLORS.dark,
                }}
              >
                {candidatures.prenom}
                {"\n"}
              </Text>
              <View style={style.button}>
                <Button
                  style={style.buttonInner}
                  title="Voter"
                    onPress={() => {
                      addVote(candidatures.id);
                    }}
                >
                  {/* <View >
            <Text
              style={{ fontSize: 18, fontWeight: "500", color: "#fff" }}
            >Voter</Text>
          </View> */}
                </Button>
              </View>
            </View>
          </View>
        </>
      )}
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  bookNowBtn: {
    height: 50,
    width: 150,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  iconContainer: {
    height: 60,
    width: 60,
    position: "absolute",
    top: -30,
    backgroundColor: COLORS.white,
    borderRadius: 30,
    right: 20,
    elevation: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  detailsContainer: {
    top: -30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: COLORS.white,
    flex: 0.3,
  },
  header: {
    marginTop: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  cardImage: {
    height: 200,
    width: 200,
    marginRight: 20,
    padding: 10,
    overflow: "hidden",
    borderRadius: 10,
  },
  imageDetails: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    position: "absolute",
    bottom: 30,
  },
  footer: {
    flexDirection: "row",
    backgroundColor: COLORS.primary,
    height: 70,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  button: {
    width: 200,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
});

export default Detailss;
