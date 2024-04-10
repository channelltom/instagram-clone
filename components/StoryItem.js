import React, { useState } from "react";
import { Text, View, Image } from "react-native";
import tw from "twrnc";

const StoryItem = ({ username, profile, viewed }) => {
  const [seen, setSeen] = useState();
  return (
    <View style={tw`flex h-20 w-30 p-1 items-center`}>
      <View
        style={{
          borderColor: "gray",
          borderWidth: 2,
          borderRadius: 50,
          padding: 4,
        }}
      >
        <Image
          style={{
            height: 90,
            width: 90,
            resizeMode: "contain",
            borderRadius: 50,
            borderColor: "gray",
            borderWidth: 1,
          }}
          resizeMode={"contain"}
          source={profile}
        />
      </View>
      <Text style={tw`text-center `}>{username}</Text>
    </View>
  );
};

export default StoryItem;
