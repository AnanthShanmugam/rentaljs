import { StatusBar } from "expo-status-bar";
import { StyleSheet, Platform, Button } from "react-native";
import SafeAreaView, { SafeAreaProvider } from "react-native-safe-area-view";
import Route from "./src/components/navigation/Router";
import { Amplify } from 'aws-amplify';

import awsExports from './src/aws-exports';
Amplify.configure(awsExports);





export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.droidSafeAreaView}>
        <StatusBar style="auto" backgroundColor="orange" />
        <Route />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  droidSafeAreaView: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});
