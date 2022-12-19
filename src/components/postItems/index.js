import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Text, View, Image, StyleSheet, Pressable } from "react-native";
import styles from "./styles";

const PostItems = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          navigation.navigate("Post Details");
        }}
        style={styles.postWrap}
      >
        <Image
          source={{ uri: "https://picsum.photos/id/2/300/300" }}
          style={styles.postImage}
        />
        <View style={styles.postContentWrap}>
          <View>
            <Text style={styles.postTitle}>Apple MAcbook</Text>
            <Text style={styles.postLocation}>New York</Text>
          </View>
          <Text style={styles.postValue}>$ 200 / day</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default PostItems;
