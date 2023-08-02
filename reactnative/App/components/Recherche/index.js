import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
  ImageBackground,
  FlatList,
} from "react-native";
import COLORS from "./colors";
import { useForm, Controller } from "react-hook-form";
import SessiondevoteDataService from "../../services/sessiondevote.service";
import majd from "../../assets/images/majd.jpg";
import tunisia from "../../assets/images/tunisia.png";
export default function Recherche({ navigation }) {
  const {
    register,
    setValue,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      reference: "",
    },
  });
  const onChange = (arg) => {
    return {
      value: arg.nativeEvent.text,
    };
  };
  const [sessions, setSessions] = useState();
  const onSubmit = (data) => {
    SessiondevoteDataService.findByRef(data.reference)
      .then((response) => {
        console.log("create: ", response.data);
        setSessions(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const Cards = ({ sessions }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate("DetailsScreen", sessions)}
      >
        <ImageBackground style={styles.cardImage} source={tunisia}>
          <Text
            style={{
              color: COLORS.white,
              fontSize: 20,
              fontWeight: "bold",
              marginTop: 10,
            }}
          >
            {sessions.libelle}
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
                {sessions.procedure_electoral}
              </Text>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.label, { fontSize: 20, marginBottom: 30 }]}>
        Session
      </Text>
      <Text style={styles.label}>Identifiant:</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="reference"
        rules={{ required: true }}
      />
      {errors.reference && <Text>This is required.</Text>}

      <View style={styles.button}>
        <Button
          style={styles.buttonInner}
          color
          title="Rechercher"
          onPress={handleSubmit(onSubmit)}
        />
      </View>

      <FlatList
        data={sessions}
        horizontal
        renderItem={({item})=> <Cards sessions={item}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 100,
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
  cardImage: {
    height: 200,
    width: 200,
    marginRight: 20,
    padding: 10,
    overflow: "hidden",
    borderRadius: 10,
    marginTop: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 300,
    borderRadius: 5,
  },
  button: {
    marginTop: 20,
    height: 40,
    backgroundColor: "#FD4659",
    borderRadius: 4,
    width: 100,
    borderRadius: 5,
  },
  buttonVerif: {
    marginTop: 20,
    height: 40,
    backgroundColor: "#32bf84",
    borderRadius: 4,
    width: 100,
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
});
