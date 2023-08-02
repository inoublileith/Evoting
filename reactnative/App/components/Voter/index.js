import React, { useState, useCallback, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
  Dimensions,
} from "react-native";
import CandidatureDataService from "../../services/candidature.service";
import { Alert } from "react-native";
import authService from "../../services/auth.service";
import voteService from "../../services/vote.service";
export default function Vote() {
  const [refreshing, setRefreshing] = useState(false);
  const [Candidats, setCandidats] = useState([]);

  const retrieveCondidats = () => {
    CandidatureDataService.getAll()
      .then((response) => {
        setCandidats(response.data);
        console.log(Candidats);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    retrieveCondidats();
  }, []);

  const [user, setUser] = useState();
  const retrieveUser = () => {
    authService
      .GetCurrentUser()
      .then((data) => {
        setUser(JSON.parse(data));
        console.log("CurrentUserId :", user.id);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    retrieveUser();
  }, []);

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
    <ScrollView contentContainerStyle={styles.scrollView}>
      {Candidats.map((Candidats) => (
        <TouchableOpacity
          style={styles.userCard}
          onPress={() => {
            addVote(Candidats.idcandidature);
          }}
        >
          <View style={styles.userCardRight}>
            <Text
              style={{ fontSize: 18, fontWeight: "500", color: "#fff" }}
            >{`${Candidats.nom} ${Candidats.prenom}`}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    paddingHorizontal: 10,
    height: Dimensions.get("screen").height,
    width: Dimensions.get("screen").width,
  },
  userCard: {
    backgroundColor: "#2f3542",
    paddingVertical: 6,
    paddingHorizontal: 6,
    borderRadius: 10,
    marginTop: 30,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  userCardRight: {
    paddingHorizontal: 10,
  },
});
