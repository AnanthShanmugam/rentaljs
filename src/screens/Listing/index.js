import { View, Text, Button } from "react-native";
import React from "react";

import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react-native";

function SignOutButton() {
  const { signOut, authStatus, user } = useAuthenticator();

  return (
    <View style={{display:'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
      <Text>User : {user.username} -- {user.attributes.email} -- {authStatus}</Text>
      <Button title="Sign Out" onPress={signOut} />
    </View>
  );
}

const Listing = () => {
  return (
    <Authenticator.Provider>
      <Authenticator>
        <View>
          <Text> All the listing goess here...</Text>
        </View>
        <SignOutButton />
      </Authenticator>
    </Authenticator.Provider>
  );
};

export default Listing;
