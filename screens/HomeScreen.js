import React from "react";
import { SafeAreaView, View, Text, Image, FlatList } from "react-native";
import { useSelector } from "react-redux";
import { selectUser } from "../slices/userSlice";
import tw from "twrnc";
import { Icon } from "@rneui/base";
import StoryItem from "../components/StoryItem";
import PostItem from "../components/PostItem";
import NavBar from "../components/NavBar";

const data = [
  {
    id: "001",
    username: "channelln5",
    profile: require("../assets/profile_pic-001.jpeg"),
    viewed: "false",
  },
  {
    id: "002",
    username: "kaaaaalifornia",
    profile: require("../assets/profile_pic-002.jpg"),
    viewed: "false",
  },
  {
    id: "003",
    username: "testymctester",
    profile: require("../assets/profile_pic-001.jpeg"),
    viewed: "false",
  },
  {
    id: "004",
    username: "jamesBond",
    profile: require("../assets/profile_pic-001.jpeg"),
    viewed: "false",
  },
];

const HomeScreen = () => {
  const user = useSelector(selectUser);

  return (
    <SafeAreaView>
      <View style={tw`flex justify-between p-2 h-15 flex-row `}>
        <Image
          style={{
            width: 125,
            height: 125,
            resizeMode: "contain",
            alignSelf: "center",
          }}
          source={require("../assets/logo-text.png")}
        />
        <View style={tw`flex-row gap-5 pr-2 pt-2`}>
          <Icon name="heart-o" type="font-awesome" />
          <Icon name="messenger" type="fontisto" />
        </View>
      </View>
      <View style={tw`h-30 flex-row`}>
        <StoryItem
          username={user.username}
          profile={require("../assets/profile_pic-001.jpeg")}
          viewed={false}
        />
        <FlatList
          data={data}
          horizontal
          renderItem={({ item }) => (
            <StoryItem
              username={item.username}
              profile={item.profile}
              viewed={item.viewed}
            />
          )}
        />
      </View>
      <View style={tw`h-150`}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <PostItem username={item.username} profile={item.profile} />
          )}
        />
      </View>
      <NavBar user={require("../assets/profile_pic-001.jpeg")} />
    </SafeAreaView>
  );
};

export default HomeScreen;
