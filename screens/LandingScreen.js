import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import tw from "twrnc";
import { FIREBASE_AUTH } from "../FirebaseConfig";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { setUser } from "../slices/userSlice";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const LandingScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const auth = FIREBASE_AUTH;

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const db = getDatabase();

  const signIn = async () => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
      dispatch(
        setUser({
          username: username,
        }),
      );
      console.log(response.user.uid, email, username);
      navigation.navigate("HomeScreen");
    } catch (error) {
      console.log(error);
    }
  };

  const signUp = async () => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      dispatch(
        setUser({
          username: username,
        }),
      );
      writeUserToDB(response.user.uid, email, username);
      navigation.navigate("HomeScreen");
    } catch (error) {
      console.log(error);
    }
  };

  const writeUserToDB = (userId, email, username) => {
    set(ref(db, "users/" + userId), {
      username: username,
      email: email,
    });
  };

  return (
    <SafeAreaView>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          style={tw`h-25 w-25 mb-10 mt-20`}
          source={require("../assets/instagram.png")}
        />
        <TextInput
          style={{
            height: 40,
            width: "70%",
            margin: 10,
            borderWidth: 1,
            borderRadius: 5,
            padding: 5,
          }}
          placeholder="Username"
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          style={{
            height: 40,
            width: "70%",
            margin: 10,
            borderWidth: 1,
            borderRadius: 5,
            padding: 5,
          }}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={{
            height: 40,
            width: "70%",
            margin: 10,
            borderWidth: 1,
            borderRadius: 5,
            padding: 5,
          }}
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
      </View>

      <View style={tw`flex items-center mt-10`}>
        <TouchableOpacity
          style={tw`bg-blue-500 h-10 w-48 rounded justify-center`}
          onPress={() => signUp()}
        >
          <Text style={tw`text-lg text-center text-white`}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`h-10 w-48 pt-5 rounded justify-center`}>
          <Text
            style={tw`text-blue-500 text-lg h-10 w-48 text-center`}
            onPress={() => signIn()}
          >
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LandingScreen;
