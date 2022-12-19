import { StatusBar } from "expo-status-bar";
import { StyleSheet, Platform, Button } from "react-native";
import SafeAreaView, { SafeAreaProvider } from "react-native-safe-area-view";
import Route from "./src/components/navigation/Router";

import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react-native";

import awsExports from "./src/aws-exports";
Amplify.configure(awsExports);



export default function App() {
  return (
    <Authenticator.Provider>
      <Authenticator loginMechanisms={['username']}>
        <SafeAreaProvider>
          <SafeAreaView style={styles.droidSafeAreaView}>
            <StatusBar style="auto" backgroundColor="orange" />
            <Route />
          </SafeAreaView>
        </SafeAreaProvider>
        
      </Authenticator>
    </Authenticator.Provider>
  );
}

const styles = StyleSheet.create({
  droidSafeAreaView: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});
