import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  Pressable,
} from "react-native";
import styles from "./styles";
const PostItems = () => {
  return (
    <Pressable
      style={styles.container}>
      <View style={styles.postWrap}>
        <Image
          source={{
            uri:
              "https://dnezpuwttqdfg.cloudfront.net/fit-in/400x400/public/"}}
          style={styles.postImage}></Image>
        <View style={styles.postContentWrap}>
          <View>
            <Text style={styles.postTitle}>TEST</Text>
            <Text style={styles.postPlace}>New york</Text>
          </View>
          <Text style={styles.postValue}>$100 / Day</Text>
        </View>
      </View>
    </Pressable>
  );
};
export default PostItems;
