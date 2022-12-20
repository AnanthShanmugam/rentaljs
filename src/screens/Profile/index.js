import { View, Text, Button } from "react-native";
import React from "react";

/* function SignOutButton() {
  const { signOut, authStatus, user } = useAuthenticator();

  return (
    <View style={{display:'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
      <Text>User : {user.username} -- {user.attributes.email} -- {authStatus}</Text>
      <Button title="Sign Out" onPress={signOut} />
    </View>
  );
}
 */

export default function Profile() {
  return (
    <View>
      <Text> Profile </Text>
{/*       <SignOutButton />
 */}    </View>
  );
}
