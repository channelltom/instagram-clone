import React from "react";
import { SafeAreaView, Image } from "react-native";
import tw from "twrnc";
import { Icon } from "@rneui/base";

const NavBar = ({ user }) => {
  return (
    <SafeAreaView style={tw`flex-row h-25 mt-5 justify-evenly`}>
      <Icon name="home" type="font-awesome" size={30} />
      <Icon name="search" type="font-awesome" size={30} />
      <Icon name="plus-square-o" type="font-awesome" size={30} />
      <Icon name="instagram" type="font-awesome" size={30} />
      <Image
        source={user}
        style={{ height: 30, width: 30, borderRadius: 15 }}
        resizeMode={"contain"}
      />
    </SafeAreaView>
  );
};

export default NavBar;
