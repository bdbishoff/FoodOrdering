import { View, Text, Platform } from "react-native";
import { StatusBar } from "expo-status-bar";

const CartScreen = () => {
  return (
    <View>
      <Text>Cart</Text>
      <StatusBar
        animated={true}
        style={Platform.OS === "ios" ? "light" : "auto"}
      />
    </View>
  );
};

export default CartScreen;
