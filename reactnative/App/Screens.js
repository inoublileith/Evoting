import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  ScrollView,
  Image,
} from "react-native";

import { AuthContext } from "./context";
import Vote from "./components/Voter";
import Login from "./components/LoginForm";
import Register from "./components/RegisterForm";
import OnBoarding from "./components/OnBoarding";
import Recherche from "./components/Recherche";
import { useForm } from "react-hook-form";
import { Ionicons } from "@expo/vector-icons";
import Details from "./components/Recherche/details";
import Detailss from "./components/Recherche/detailss";
import { Controller } from "react-hook-form";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  label: {
    color: "black",
    marginLeft: 10,
    fontSize: 15,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 300,
    borderRadius: 5,
  },
  textarea: {
    height: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 300,
    borderRadius: 5,
  },
  button: {
    marginTop: 20,
    height: 40,
    backgroundColor: "#32BF84",
    borderRadius: 4,
    width: 150,
    borderRadius: 5,
  },
  Listitem: {
    marginTop: 10,
    borderRadius: 4,
    width: 350,
    // justifyContent: "lef",
    // alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 30,
  },
  title: {
    color: "#222",
    fontSize: 15,
    fontWeight: "bold",
  },
  image: {
    width: "30%",
    height: "20%",
    resizeMode: "contain",
    alignSelf: "center",
  },
});

const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

export const Verifieroriginalite = ({ navigation }) => (
  <ScreenContainer>
    {/* <Text style={[styles.title, { margin: 10, fontSize: 20 }]}>Session</Text> */}

    <View>
      <View style={styles.Listitem}>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
        

          <View style={styles.Listitem}>
            <Text style={[styles.title, { marginBottom: 10 }]}>
              Session 1 :
            </Text>

            <Text style={{ color: "#444", fontSize: 15 }}>• Date début: </Text>
            <Text style={{ color: "#444" }}> 15-3-2022 </Text>
            <Text style={{ color: "#444", fontSize: 15, marginTop: 10 }}>
              • Date fin:
            </Text>
            <Text style={{ color: "#444" }}> 30-4-2022</Text>
            <Text style={{ color: "#444", fontSize: 15, marginTop: 10 }}>
              • Procédures électorales :
            </Text>
            <Text style={{ color: "#444" }}>{"  "}Voter une seule fois.</Text>
          </View>
          <View style={styles.Listitem}>
            <Text style={[styles.title, { marginBottom: 10 }]}>
              Session 2 :
            </Text>

            <Text style={{ color: "#444", fontSize: 15 }}>• Date début: </Text>
            <Text style={{ color: "#444" }}> 15-3-2022 </Text>
            <Text style={{ color: "#444", fontSize: 15, marginTop: 10 }}>
              • Date fin:
            </Text>
            <Text style={{ color: "#444" }}> 30-4-2022</Text>
            <Text style={{ color: "#444", fontSize: 15, marginTop: 10 }}>
              • Procédures électorales :
            </Text>
            <Text style={{ color: "#444" }}>{"  "}Voter une seule fois.</Text>
          </View>
          {/* <View style={styles.button}>
            <Button style={styles.buttonInner} color title="Envoyer" />
          </View> */}
        </View>
      </View>
    </View>
  </ScreenContainer>
);

// export const Details = ({ route }) => (
//   <ScreenContainer>
//     <Text>Details Screen</Text>
//     {/* {route.params.name && <Text>{route.params.name}</Text>} */}
//   </ScreenContainer>
// );

export const Search = ({ navigation }) => (
  <ScreenContainer>
    <Image
      source={require("../App/assets/images/logo.png")}
      style={styles.image}
    />
    <ScrollView>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <View
          style={[
            styles.Listitem,
            {
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            },
          ]}
        >
          <Text style={[styles.title, { marginBottom: 10 }]}>Candidat 1</Text>

          {/* <Text style={{ color: "#444" }}>• Déplacement compteur:</Text> */}
          <View style={styles.button}>
            <Button style={styles.buttonInner} color title="Voter" />
          </View>
        </View>
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <View
          style={[
            styles.Listitem,
            {
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            },
          ]}
        >
          <Text style={[styles.title, { marginBottom: 10 }]}>Candidat 2</Text>

          {/* <Text style={{ color: "#444" }}>• Déplacement compteur:</Text> */}
          <View style={styles.button}>
            <Button style={styles.buttonInner} color title="Voter" />
          </View>
        </View>
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <View
          style={[
            styles.Listitem,
            {
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            },
          ]}
        >
          <Text style={[styles.title, { marginBottom: 10 }]}>Candidat 3</Text>

          {/* <Text style={{ color: "#444" }}>• Déplacement compteur:</Text> */}
          <View style={styles.button}>
            <Button style={styles.buttonInner} color title="Voter" />
          </View>
        </View>
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <View
          style={[
            styles.Listitem,
            {
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            },
          ]}
        >
          <Text style={[styles.title, { marginBottom: 10 }]}>Candidat 4</Text>

          {/* <Text style={{ color: "#444" }}>• Déplacement compteur:</Text> */}
          <View style={styles.button}>
            <Button style={styles.buttonInner} color title="Voter" />
          </View>
        </View>
      </View>
    </ScrollView>
  </ScreenContainer>
);

export const Search2 = () => (
  <ScreenContainer>
    <Text>Search2 Screen</Text>
  </ScreenContainer>
);
export const RechercheScreen = ({navigation}) => (
  <ScreenContainer>
    <Recherche navigation={navigation}/>
  </ScreenContainer>
);
export const DetailsScreen = ({route,navigation}) => (
  <ScreenContainer>
    <Details navigation={navigation} route={route}/>
  </ScreenContainer>
);
export const DetailsScreenn = ({route}) => (
  <ScreenContainer>
    <Detailss route={route}/>
  </ScreenContainer>
);
export const VoteScreen = () => (
  <ScreenContainer>
    <Vote />
  </ScreenContainer>
);
export const Explore = () => (
  <ScreenContainer>
    <Image
      source={require("../App/assets/images/logo.png")}
      style={styles.image}
    />
    <Text style={[styles.title, { margin: 10, fontSize: 20 }]}>
      Reclamation
    </Text>

    <View>
      <View style={styles.Listitem}>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          {/*             
            <Text style={{ marginTop: 10, fontSize: 15, fontWeight: "bold" }}>
              Panadol{" "}
            </Text>
            <Text>Date d'achat: 5-2-2022 </Text>
            <Text>Nom de pharmacie: MedPharma</Text> */}

          <TextInput style={styles.input} placeholder="Motif" />
          <TextInput
            style={styles.textarea}
            placeholder="Description"
            multiline
            numberOfLines={4}
          />

          <View style={styles.button}>
            <Button style={styles.buttonInner} color title="Envoyer" />
          </View>
        </View>
      </View>
    </View>
  </ScreenContainer>
);

export const RecScreen = () => (
  <ScreenContainer>
    <Image
      source={require("../App/assets/images/logo.png")}
      style={styles.image}
    />
    <Text style={[styles.title, { margin: 10, fontSize: 20 }]}>Actualité</Text>
    <View style={styles.Listitem}>
      <Text style={{ color: "#444" }}>Titre :</Text>

      <Text style={[styles.title, { marginBottom: 10 }]}>• Coupure d'eau</Text>
    </View>
    <View style={styles.Listitem}>
      <Text style={[styles.title, { marginBottom: 10 }]}>Description :</Text>

      <Text style={{ color: "#444" }}>• Dépot de la demande</Text>
    </View>
  </ScreenContainer>
);

export const Profile = ({ navigation }) => {
  const { signOut } = React.useContext(AuthContext);

  return (
    <ScreenContainer>
      <Text>Profile Screen</Text>
      <Button title="Drawer" onPress={() => navigation.toggleDrawer()} />
      <Button title="Sign Out" onPress={() => signOut()} />
    </ScreenContainer>
  );
};

export const Splash = () => (
  <ScreenContainer>
    <Text>Loading...</Text>
  </ScreenContainer>
);

export const OnBoard = ({ navigation }) => (
  <ScreenContainer>
    <OnBoarding navigation={navigation} />
  </ScreenContainer>
);

export const SignIn = ({ navigation }) => {
  const { signIn } = React.useContext(AuthContext);

  return (
    <ScreenContainer>
      <Login navigation={navigation} />
    </ScreenContainer>
  );
};

export const CreateAccount = ({ navigation }) => {
  const { signUp } = React.useContext(AuthContext);

  return (
    <ScreenContainer>
      <Register navigation={navigation} />
    </ScreenContainer>
  );
};
