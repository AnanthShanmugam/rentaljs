import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, SafeAreaView, Platform } from "react-native";
import PostItems from "./src/components/postItems";

export default function App() {
  return (
    <SafeAreaView style={styles.droidSafeAreaView}>
      <StatusBar style="auto" backgroundColor="orange" />
      <PostItems />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  droidSafeAreaView:{
    flex:1,
    paddingTop: Platform.OS === "android" ? 25 : 0,
  }
});
