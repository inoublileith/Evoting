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
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import COLORS from "./colors";
import majd from "../../assets/images/majd.jpg";
import tunisia from "../../assets/images/tunisia.png";
import candidatureService from "../../services/candidature.service";

const Details = ({ navigation, route }) => {
    
  const sessions = route.params;
  const idsession = sessions.id

  const [candidatures, setCandidatures] = useState([])

  useEffect(() => {
    candidatureService.getByIdSession(idsession)
    .then((response) => {
        setCandidatures(response.data)
        console.log(response.data)
    })
    .catch((e) => {
        console.log(e)
    })
  }, []);
  const Cards = ({ candidatures }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate("DetailsScreenn", candidatures)}
      >
        <ImageBackground style={style.cardImage} source={majd}>
          <Text
            style={{
              color: COLORS.white,
              fontSize: 20,
              fontWeight: "bold",
              marginTop: 10,
            }}
          >
            {candidatures.nom}
          </Text>
          <View
            style={{
              flex: 1,
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "flex-end",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Text style={{ marginLeft: 5, color: COLORS.white }}>
                {candidatures.prenom}
              </Text>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
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
      {sessions && (
        <>
          <ImageBackground style={{ flex: 0.7 }} source={tunisia}>
            <View style={style.header}>
            </View>
            <View style={style.imageDetails}>
             
              <View style={{ flexDirection: "row" }}></View>
            </View>
          </ImageBackground>
          <View style={style.detailsContainer}>
         
            <View style={{ flexDirection: "column", marginTop: 10,                 alignItems: "center",
 }}>
            
            
            <Text
                style={{
                  marginLeft: 5,
                  fontSize: 20,
                  color: COLORS.dark,
                  fontWeight: "bold",
                }}
              >
                Libelle:{"  "}
              </Text>
              <Text
                style={{
                  marginLeft: 5,
                  fontSize: 20,
                  color: COLORS.dark,
                }}
              >
                {sessions.libelle}
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
                Procedure électoral:{"  "}
              </Text>
              <Text
                style={{
                  marginLeft: 5,
                  fontSize: 20,
                  color: COLORS.dark,
                }}
              >
                {sessions.procedure_electoral}
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
                Réference:{"  "}
              </Text>
              <Text
                style={{
                  marginLeft: 5,
                  fontSize: 20,
                  color: COLORS.dark,
                }}
              >
                {sessions.reference}
                {"\n"}
              </Text>
              
            </View>
            <FlatList
        data={candidatures}
        horizontal
        renderItem={({item})=> <Cards candidatures={item}/>}
      />
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
    flex: 0,
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
});

export default Details;
