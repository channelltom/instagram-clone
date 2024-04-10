import React, {useState} from "react";
import { Text, View, Image } from "react-native";
import tw from "twrnc";
import { Icon } from "@rneui/base";

const PostItem = ({username, profile}) => {
  const [liked, setLiked] = useState();

  return (
    <View>
      <View style={tw`flex-row pl-2.5 pr-5 pt-5 h-10 items-center justify-between`}>
        <View style={tw`flex-row items-center`}>
          <Image style={{height: 40, width: 40, borderRadius: 20, padding: 5}} source={profile}/>
          <Text style={{paddingLeft: 10}}>{username}</Text>
        </View>
        <Icon name="ellipsis-v" type="font-awesome" />
      </View>
      <View style={tw`h-120 mt-5`}><Text>Image</Text></View>
      <View style={tw`flex-row justify-between p-5`}>
        <View style={tw`flex-row gap-5`}>
          <Icon name="heart-o" type="font-awesome"/>
          <Icon name="comment-o" type="font-awesome"/>
          <Icon name="paper-plane-o" type="font-awesome"/>
        </View>
        <View style={tw`flex-row`}>
          <Icon name="bookmark-o" type="font-awesome"/>
        </View>
      </View>
    </View>
  )
};

export default PostItem;
