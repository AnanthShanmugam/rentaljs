import { View, Text, Button } from "react-native";
import React from "react";

import { withAuthenticator } from "aws-amplify-react-native";

const Listing = () => {
  return (
    <View>
      <Text> All the listing goess here...</Text>
    </View>
  );
};

export default withAuthenticator(Listing, {
  // Render a sign out button once logged in
  includeGreetings: true,
});
