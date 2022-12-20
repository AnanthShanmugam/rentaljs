import { View, Text } from "react-native";



export default function Profile() {
  return (
    <View>
      <Text>Profile</Text>
    </View>
  );
}


/* function SignOutButton() {
  const { signOut, authStatus, user } = useAuthenticator();

  return (
    <View style={{display:'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
      <Text>User : {user.username} -- {user.attributes.email} -- {authStatus}</Text>
      <Button title="Sign Out" onPress={signOut} />
    </View>
  );
}

       <SignOutButton />
 
 */