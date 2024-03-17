import { TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import Title from "../../components/Title";

export default function Profile() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Title title="Profile" />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Title title="Go to Home" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Category")}
      >
        <Title title="Go to Category" />
      </TouchableOpacity>
    </View>
  );
}
