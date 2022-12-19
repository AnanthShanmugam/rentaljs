import { Text, View, TextInput, Pressable } from "react-native";
import styles from "./styles";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const HeaderForMobile = () => {
  return (
    <>
      <View style={styles.headerWrap}>
        <View style={styles.searchByTextWrap}>
          <Feather name="search" size={24} color="black" />
          <TextInput
            placeholder="Search in Rent.com"
            style={[styles.searchPlaceholder, { width: "100%" }]}
            multiline={false}
          />
        </View>
        <View style={styles.locationCatSearchWrap}>
          <Pressable
            style={styles.locationSearchWrap}
          >
            <MaterialIcons name="location-on" size={24} color="black" />
            <Text>Location</Text>
            <Text style={styles.locationSearchText}>
              New York
            </Text>
          </Pressable>
          <Pressable
            style={{ flexDirection: "row" }}
          >
            <MaterialIcons name="list" size={24} color="black" />
            <Text style={styles.catText}>Category</Text>
            <Text style={styles.catDynText}>
              Vehicles
            </Text>
          </Pressable>
        </View>
      </View>
    </>
  );
};
export default HeaderForMobile;
