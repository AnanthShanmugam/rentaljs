import React, { useState } from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import styles from './styles';

const PostItems = () => {
  return (
    <View style={styles.container}>
      <View style={styles.postWrap}>
        <Image
          source={{ uri: "https://picsum.photos/id/2/300/300" }}
          style={styles.postImage}
        />
        <View style={styles.postContentWrap}>
          <View>
            <Text style={styles.postTitle}>Le</Text>
            <Text style={styles.postLocation}>New York</Text>
          </View>
          <Text style={styles.postValue}>$ 200 / day</Text>
        </View>
      </View>
    </View>
  );
};

export default PostItems;
