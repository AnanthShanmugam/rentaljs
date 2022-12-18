import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Platform } from "react-native";
import { colors } from "./src/modal/color";
import PostItems from "./src/components/postItems";

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <View style={styles.SafeAreaViewForDroid}>
        <PostItems />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  SafeAreaViewForDroid: {
    flex: 1,
    paddingTop: Platform.OS === "android" || Platform.OS === "web" ? 25 : 0,
    backgroundColor: colors.background,
  },
});
