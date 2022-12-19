import { View, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import HeaderForMobile from "../../components/headerForMobile";
import PostItems from "../../components/postItems";

export default function Home() {
  return (
    <>
      <HeaderForMobile />
      <PostItems />
    </>
  );
}
